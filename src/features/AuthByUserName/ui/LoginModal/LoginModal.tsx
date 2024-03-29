import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import {Modal} from "shared/ui/Modal/Modal";
import React from "react";
import {Suspense} from "react";
import {LoginFormAsync} from "../LoginForm/LoginForm.async";
import {Loader} from "shared/ui/Loader/Loader";


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
            <Suspense fallback={<Loader/>}>
                <LoginFormAsync onSucces={onClose}/>
            </Suspense>
        </Modal>
    );
};

