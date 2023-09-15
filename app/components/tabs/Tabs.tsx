'use client'

import { Tab, Tabs as T, TabList, TabPanel } from 'react-tabs'
import { Tab as TabInterface } from '@/app/interfaces'
import 'react-tabs/style/react-tabs.css'

function Tabs({ tabs, defaultIndex }: { tabs: TabInterface[]; defaultIndex?: number }) {
  return (
    <T defaultIndex={defaultIndex || 0}>
      <TabList className="flex justify-center items-end">
        {tabs.map((tab, index) => {
          return (
            <Tab
              key={index}
              tabIndex="0"
              className="font-crimsonText text-black-25 cursor-pointer border-b-[2px] border-black-25 px-[16px] sm:px-[24px]"
              selectedClassName="text-primary font-bold border-primary"
            >
              <span className='sm:hidden'>{tab.title.split(' ')[0]}</span>
              <span className="hidden sm:block">{tab.title}</span>
            </Tab>
          )
        })}
      </TabList>

      {tabs.map((tab, index) => {
        return <TabPanel key={index}>{tab.body}</TabPanel>
      })}
    </T>
  )
}

export default Tabs
