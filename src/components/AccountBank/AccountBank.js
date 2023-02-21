import './AccountBank.css';
import React from 'react';

const AccountBank = () => {

    const [account, setAccount] = React.useState({ name: 'Dani', savings: 1000, founds: 1000 });

    const addMoney = () => {

        const newAccount = { ...account,
             savings: account.savings + 50 };

        setAccount(newAccount);
    }

    const withdrawalMoney = () => {

        const newAccount = { ...account,
             savings: (account.savings < 50) ? account.savings  : account.savings - 50 };
        
        setAccount(newAccount);
        if (account.savings < 50){alert('Dónde vas!!! No tienes un chavo!!')}
    }

    const internalTransfer = () => {
        
        const newAccount = { 
            ...account,
            savings: (account.savings < 1000) ? account.savings : account.savings - 1000,
            founds: (account.savings < 1000) ? account.founds : account.founds + 1000
        };
        
        setAccount(newAccount)
        if (account.savings < 1000){alert('Dónde vas!!! No tienes un chavo!!')}
    }

    return (
        <div className='account'>
            <div className='account__container-info'>
                <p className='account__info'>El titular de la cuenta es : {account.name}</p>
                <p className='account__info'>El saldo de la cuenta es : {account.savings}</p>
                <p className='account__info'>El total de fondos de inversión es : {account.founds}</p>
            </div>
            <div className='account__container-button'>
                <button onClick={withdrawalMoney} className='account__button'>Sacar 50 €</button>
                <button onClick={addMoney} className='account__button'>Añadir 50 €</button>
                <button onClick={internalTransfer} className='account__button'>Traspasar 1000 € al fondo €</button>
            </div>
        </div>
    )
}

export default AccountBank;
