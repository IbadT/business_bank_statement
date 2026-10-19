import { useState } from "react";
import { FilterTab } from "@/shared/ui/filter-tab";
import {
  NotificationCategoryItem,
  NotificationGroup,
  notificationCategories,
  notificationGenerationTypes,
  notificationGroups,
  filterNotificationGroups,
} from "@/entities/notification";

export const NotificationsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(notificationCategories[0].id);
  const [activeGenType, setActiveGenType] = useState(notificationGenerationTypes[0]);

  return (
    <div className="flex flex-col gap-[30px] px-[10px] pt-6 pb-6">
      <span className="text-[28px] leading-tight tracking-[0.84px] text-[#171717] font-light">
        Notifications
      </span>

      <div className="flex items-stretch min-h-[500px]">
        <aside className="flex flex-col gap-2 w-[320px] shrink-0 p-3 border-r border-[#E5E5E5]">
          {notificationCategories.map((category) => (
            <NotificationCategoryItem
              key={category.id}
              category={category}
              isSelected={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            />
          ))}
        </aside>

        <section className="flex flex-col flex-1 min-w-0 gap-5 p-5">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {notificationGenerationTypes.map((type) => (
              <div key={type} className="shrink-0 whitespace-nowrap">
                <FilterTab
                  label={type}
                  isSelected={activeGenType === type}
                  onClick={() => setActiveGenType(type)}
                />
              </div>
            ))}
          </div>

          {filterNotificationGroups(notificationGroups, activeGenType).map((group, idx) => (
            <NotificationGroup key={idx} {...group} />
          ))}
        </section>
      </div>
    </div>
  );
};
