import { Tooltip, Button } from 'antd'
import { TooltipPlacement } from 'antd/lib/tooltip'
import Link from 'next/link'
import React from 'react'

interface NavigationBtnProps {
  tootlip?: boolean | string
  tooltipPlacement?: TooltipPlacement
  link: string
  btnType?: any
  icon: any
  btnText?: string
}

const NavigationBtn: React.FC<NavigationBtnProps> = ({
  tootlip,
  tooltipPlacement = 'bottom',
  link,
  btnType = 'link',
  icon,
  btnText = '',
}) => {
  return (
    <>
      {typeof tootlip === 'string' ? (
        <Link href={link} target="_blank">
          <Tooltip placement={tooltipPlacement} title={tootlip}>
            <Button
              type={btnType}
              className="text-white hover:!text-accent hover:!border-accent"
              icon={icon && icon}
            >
              {btnText}
            </Button>
          </Tooltip>
        </Link>
      ) : (
        <Link href={link} target="_blank">
          <Button
            type={btnType}
            className="text-white hover:!text-accent hover:!border-accent"
            icon={icon && icon}
          >
            {btnText}
          </Button>
        </Link>
      )}
    </>
  )
}

export default NavigationBtn
