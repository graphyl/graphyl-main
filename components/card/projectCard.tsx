import { EyeFilled } from '@ant-design/icons'

import styles from '../../styles/projectCard.module.css'
import React from 'react'
import { Project } from '../../pages/portfolio'

const ProjectCard: React.FC<Project> = (props: Project) => {
  return (
    <div className={styles.card}>
      <div className="card__img absolute inset-0 bottom-14 xl:bottom-0">
        <img className="w-full h-full" src={props.imgUrl} alt={props.name} />
      </div>
      <div className={styles.card__data}>
        <div className="w-full flex align-center justify-between px-2 xl:flex-col xl:justify-center xl:text-center xl:text-4xl">
          <h3 className="card__title text-black text-sm mb-0 sm:text-lg lg:text-2xl xl:text-2xl xl:text-white xl:bg-black xl:w-max xl:mx-auto xl:px-2">
            {props.name}
          </h3>
          <a
            href={props?.liveUrl}
            className="card__link flex align-center text-xl lg:text-2xl xl:text-3xl xl:!text-white xl:mt-2 xl:mx-auto"
            target="_blank"
          >
            <EyeFilled />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
