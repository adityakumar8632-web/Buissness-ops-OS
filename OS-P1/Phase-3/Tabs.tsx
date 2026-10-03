import React, { useState, useRef } from 'react';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
  onChange?: (tabId: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultTabId, onChange }) => {
  const [activeTab, setActiveTab] = useState(defaultTabId || tabs[0]?.id);
  const tabListRef = useRef<HTMLDivElement>(null);

  const selectTab = (id: string) => {
    setActiveTab(id);
    onChange?.(id);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    const enabledTabs = tabs.filter((t) => !t.disabled);
    const currentIndex = enabledTabs.findIndex((t) => t.id === tabs[index].id);

    let nextIndex = -1;
    if (e.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % enabledTabs.length;
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + enabledTabs.length) % enabledTabs.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = enabledTabs.length - 1;
    }

    if (nextIndex !== -1) {
      e.preventDefault();
      const targetId = enabledTabs[nextIndex].id;
      selectTab(targetId);
      const btn = tabListRef.current?.querySelector<HTMLButtonElement>(`[data-tab-id="${targetId}"]`);
      btn?.focus();
    }
  };

  return (
    <div className="tabs-container">
      <div ref={tabListRef} role="tablist" aria-orientation="horizontal" className="tabs-list border-b">
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            role="tab"
            data-tab-id={tab.id}
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            disabled={tab.disabled}
            onClick={() => selectTab(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className={`tab-btn ${activeTab === tab.id ? 'is-active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={activeTab !== tab.id}
          className="tab-panel p-4"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};