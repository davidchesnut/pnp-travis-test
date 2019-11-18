﻿/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT license.
 */

import * as React from 'react';

export default class Header extends React.Component {
    render() {
        const {
            title,
            logo,
            message
        } = this.props;

        return (
            <section className='ms-welcome__header ms-bgColor-neutralLighter ms-u-fadeIn500'>
                <img width='90' height='90' src={logo} alt={title} title={title} />
                <h1 className='ms-fontSize-su ms-fontWeight-light ms-fontColor-neutralPrimary'>{message}</h1>
            </section>
        );
    }
}
