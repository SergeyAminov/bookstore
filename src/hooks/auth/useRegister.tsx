import { useState } from "react";
import axios from "axios";
import { TStoreUser } from "@/types/types";
import { BASE_URL } from "@/api/constants";

type TUser = {
    name: string,
    surname: string,
    username: string,
    email: string,
    password: string
}

type TUseRegisterProps = {
    setUserData: (data: TStoreUser) => {
        payload: TStoreUser;
        type: "user/setUserData";
    }
}

export const useRegister = ({ setUserData }: TUseRegisterProps) => {
    const [user, setUser] = useState<TUser>({
        name: '',
        surname: '',
        username: '',
        email: '',
        password: ''
    })
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {

        if (error.length > 0)
            setError('')

        const name = e.target.name
        const value = e.target.value
        setUser(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function submit(e: React.SyntheticEvent) {
        e.preventDefault()

        setIsLoading(true)
        const url = BASE_URL + '/auth/register'
        axios.post<TStoreUser | string>(url, user)
            .then(({ data }) => {
                if (!(typeof data === "string")) {
                    setUserData(data)
                }
                else
                    setError(data)

                setIsLoading(false)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    return {submit,  user, onChange, isLoading, error }
}
