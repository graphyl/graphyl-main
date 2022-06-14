import { Collapse } from 'antd'
import React from 'react'
import useWindowSize from '../hooks/use-window-dimensions'
import { accordionData } from '../utils/data'

const faqAccordion: React.FC = () => {
  const { width, height } = useWindowSize()
  const { Panel } = Collapse
  return (
    <div className="w-full">
      <div className="text-center mb-5">
        <h2 className="inline-block	text-biscuit text-3xl text-stroke-primary mb-4 relative title-effect">
          FAQ
        </h2>
      </div>
      <Collapse className="bg-white" bordered={false} accordion>
        {accordionData.map((data, index) => (
          <Panel
            header={data.question}
            key={index}
            style={{ paddingBlock: 5, borderRadius: 10 }}
          >
            <span className="!px-10 text-white">{data.answer}</span>
          </Panel>
        ))}
      </Collapse>
    </div>
  )
}

export default faqAccordion
