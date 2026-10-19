import { useState } from 'react';
import { PDFItem } from "@/entities/pdf";
import { Button } from '@/shared/ui/button';
import { GenerateDocumentModal } from './GenerateDocumentModal';
import { Select } from '@/shared/ui/select';

const PDF_GROUPS = [
  {
    date: '15 Апрель, 2025',
    items: [
      { title: 'PDF_File_Header_Text', subtitle: 'Tax Return', time: '12:28 AM', draft: false },
      { title: 'PDF_File_Header_Text', subtitle: 'Tax Return', time: '12:28 AM', draft: true },
      { title: 'PDF_File_Header_Text', subtitle: 'Tax Return', time: '12:28 AM', draft: false },
    ],
  },
];

const FILTER_OPTIONS = [
  { id: 'all', label: 'All' },
  { id: 'drafts', label: 'Drafts' },
  { id: 'completed', label: 'Completed' },
];

const SORT_OPTIONS = [
  { id: 'newest', label: 'Newest first' },
  { id: 'oldest', label: 'Oldest first' },
  { id: 'name', label: 'Name (A–Z)' },
];

export const PDFsPage = () => {
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('Newest first');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const groups = PDF_GROUPS.map((group) => {
    const items = group.items
      .filter((item) => filter === 'All' || (filter === 'Drafts' ? item.draft : !item.draft))
      .sort((x, y) => {
        if (sort === 'Name (A–Z)') return x.title.localeCompare(y.title);
        const cmp = x.time.localeCompare(y.time);
        return sort === 'Oldest first' ? cmp : -cmp;
      });
    return { ...group, items };
  }).filter((group) => group.items.length > 0);

  return (
    <div className="flex flex-col gap-[30px] px-[10px] pt-6 pb-6">
      <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-3">
        <h1 className="text-[28px] leading-tight tracking-[0.84px] font-semibold text-[#171717]">PDF'S</h1>
        <div className="flex items-center gap-2.5">
          <Button
            color="none"
            text="Edit PDF file"
            icon={<img src="/Group.png" alt="" className="w-5 h-5 object-contain" />}
          />
          <Button color="primary" text="Generate new" onClick={() => setIsModalOpen(true)} />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <Select
          name="filter"
          placeholder="All"
          value={filter}
          options={FILTER_OPTIONS}
          onChange={(e) => setFilter(e.target.value)}
          readOnly
        />
        <Select
          name="sort"
          placeholder="Sort by"
          value={sort}
          options={SORT_OPTIONS}
          onChange={(e) => setSort(e.target.value)}
          readOnly
        />
      </div>

      {groups.map((group) => (
        <div key={group.date} className="flex flex-col gap-3">
          <span className="text-[#8f8f8f] text-[15px] font-semibold">{group.date}</span>
          <div className="flex flex-col gap-1.5">
            {group.items.map((item, idx) => (
              <PDFItem key={idx} {...item} />
            ))}
          </div>
        </div>
      ))}

      {groups.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-[#8f8f8f] text-sm">
          No PDFs found
        </div>
      )}
      {isModalOpen && <GenerateDocumentModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};
