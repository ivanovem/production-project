import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import {Modal} from "shared/ui/Modal/Modal";
import {LoginForm} from "../LoginForm/LoginForm";
import React from "react";


interface LoginModalProps {
    className?: string;
    isOpen: boolean,
    onClose: ()=> void
}

export const LoginModal = ({className, isOpen, onClose}: LoginModalProps) => {
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginForm/>
        </Modal>
    );
};

