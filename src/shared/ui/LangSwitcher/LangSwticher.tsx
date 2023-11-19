import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LangSwticher.module.scss';
import {useTranslation} from "react-i18next";
import React from "react";
import {Button, ThemeButton} from "shared/ui/Button/Button";


interface LangSwticherProps {
    className?: string;
}

export const LangSwticher = ({className}: LangSwticherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () =>{
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    }

    return (
        <Button className={classNames(cls.LangSwticher, {}, [className])}
                theme={ThemeButton.CLEAR}
                onClick={toggle}
        >
            {t('Язык')}
        </Button>
    );
};
