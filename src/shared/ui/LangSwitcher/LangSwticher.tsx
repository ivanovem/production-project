import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import React, {memo} from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface LangSwticherProps {
    className?: string
    short?: boolean
}

export const LangSwticher = memo(({ className, short }: LangSwticherProps) => {
    const { t, i18n } = useTranslation('')

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR_INVERTED}
            onClick={toggle}
        >
            {t(short ? 'Короткий язык' : 'Язык' )}
        </Button>
    )
})
