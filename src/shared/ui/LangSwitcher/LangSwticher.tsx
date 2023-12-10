import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import React from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface LangSwticherProps {
    className?: string
}

export const LangSwticher = ({ className }: LangSwticherProps) => {
    const { t, i18n } = useTranslation('language')

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    )
}
