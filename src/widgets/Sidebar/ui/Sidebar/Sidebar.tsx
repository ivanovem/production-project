import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, {memo, useState} from 'react'
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher'
import {LangSwticher} from 'shared/ui/LangSwitcher/LangSwticher'
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import MainIcon from "shared/assets/icons/main-20-20.svg"
import {SidebarItemsList} from "../../model/items";
import {SidebarItem} from "../SidebarItem/SidebarItem";

interface SidebarProps {
    className?: string
    backgroundColor?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const { t } = useTranslation('')

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>

                {SidebarItemsList.map((item)=> {
                   return <SidebarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}

                    />
                })}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwticher short={collapsed}
                              className={cls.lang}
                />
            </div>
        </div>
    )
})
