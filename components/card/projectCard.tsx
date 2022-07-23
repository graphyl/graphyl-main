import { EyeFilled, LinkOutlined } from '@ant-design/icons'
import { Tag, Button } from 'antd'
import styles from '../../styles/projectCard.module.css'
import React from 'react'
import { Project } from '../../interface/interface'
import useWindowSize from '../../hooks/use-window-dimensions'

const ProjectCard: React.FC<Project> = (props) => {
  const { width, height } = useWindowSize()
  return (
    <div className={styles.card}>
      <div className="card__img absolute inset-0 bottom-14 xl:bottom-0">
        <img className="w-full h-full" src={props.imgUrl} alt={props.name} />
      </div>
      <div className={`${styles.card__data} absolute inset-0`}>
        <div className="w-full h-full flex items-center justify-between px-2 xl:flex-col xl:justify-center xl:text-center xl:text-4xl">
          <h3 className="card__title text-black text-lg mb-0 sm:text-xl xl:text-white xl:w-max xl:mx-auto xl:px-2 xl:font-light">
            {props.name}
          </h3>
          <div className="hidden xl:inline-block card__tags">
            {props.techStack.map((stack) => (
              <Tag style={{ padding: '5px 10px' , borderRadius: '100vw' }} color="#1b1a17">{stack}</Tag>
            ))}
          </div>
          <a
            href={props?.liveUrl}
            className={`${
              width > 1280 ? 'hidden' : ''
            } card__link flex items-center text-xl lg:text-2xl xl:text-3xl xl:!text-white xl:mt-2 xl:mx-auto`}
            target="_blank"
          >
            <EyeFilled />
          </a>

          <a
            type="button"
            target="_blank"
            className="live-url-button mt-5 hidden xl:flex items-center rounded-xl"
            href={props?.liveUrl}
            // icon={<LinkOutlined />}
          >
            <LinkOutlined />
            View
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
