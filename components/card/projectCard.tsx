import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from '@ant-design/icons'
import { Card, Avatar } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'
import { Project } from '../../pages/portfolio'

const ProjectCard: React.FC<Project> = (props: Project) => {
  return (
    <Card
      cover={<img alt={props.name} src={props.imgUrl} />}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta title={props.name} description="This is the description" />
    </Card>
  )
}

export default ProjectCard
