'use client';

import { setCookie } from 'cookies-next';
import { useState } from 'react';

interface Props {
  currentTab?: number;
  tabOptions?: number[];
}

export const TabBar = ({
  tabOptions = [1, 2, 3, 4],
  currentTab = 1,
}: Props) => {
  const [selected, setSelected] = useState(currentTab);

  const onTabSelected = (tabOption: number) => {
    setSelected(tabOption);
    setCookie('selectedTab', tabOption.toString());
  };
  return (
    <div
      className={`grid w-full space-x-2 rounded-xl bg-gray-200 p-2 grid-cols-${tabOptions.length}`}
    >
      {tabOptions.map((tabOption) => (
        <div key={tabOption}>
          <input
            checked={selected === tabOption}
            onChange={() => {}}
            type='radio'
            id={tabOption.toString()}
            className='peer hidden'
          />
          <label
            onClick={() => onTabSelected(tabOption)}
            className='block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white'
          >
            {tabOption}
          </label>
        </div>
      ))}
    </div>
  );
};
