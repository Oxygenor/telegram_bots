// Config Server

const http = require('http');
const port = process.env.PORT || 3000;

// Функция обработки запросов
const requestHandler = (req, res) => {
    // Отправляем ответ "Hello World!"
    res.end('Hello World!');
    // Логируем запрос для отладки
    console.log('Received a request.');
};

// Создаем сервер и передаем функцию обработки запросов
const server = http.createServer(requestHandler);

// Запускаем сервер и выводим сообщение в консоль
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


// Script App

let debug = true;

let users = {
    AXL: {
        authorize: 'query_id=AAFNP8soAAAAAE0_yygYCql3&user=%7B%22id%22%3A684408653%2C%22first_name%22%3A%22AXL%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22AXL_SL%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1730539715&hash=4f1375db2fe34f4ccaebcb478a8f7421592aaa70aed7482f1dc77c4fb3d5c373&referrer=',
        x_api_key: '',
        x_recaptcha_key: "03AFcWeA4uvwl4bUPG3REiHwsJhZ0C4cnoIvWvJvvd08ka-ZpCa0j8dgVgvvvmguiLOQB33agWVmJdrtUlMJsC5CqbQg7l5uLBG06HrBDRf3w1CtQAKHKjGXuQ11YKqb2GQY7dYw-uhbs4G8LCEJkXcCjJFzaej0Yd3Rsc486nWBUq-n0r8nrbyI67P655OoNxsYF_kPP9FHhTAGtlGBfKJ46JeIPyewZG31H7AK-vLWin1QTR2mU6yRX7rsFS3QXL53OhSKo4_hvfn862-9TUyWfesuWe0OstklBifIQdMNE8ZQ3E_5kppge43Jx8cddaHtNAxlM9yoUuyhUphcKFhfCER8rDTCIMvDniHcdhQksrrv8PKiowJa2WMB1-Z1gO6Ci8b4o-XrB4sn821i3fjkEKkjlrW8BhnLVaCokfwDzoMB5a3bXyO7zPxAIAMAULPeAUOVKo-18ZmAGUIxKdpyzGJu0GDyf1jVZ2tr0a4zpqOwnmU4Xs5COIcWvXWpIYpupNJczRM1b_5FbXPu4sxRBU9oYFeFLmZbbYiQYejTcpi10eOfonBKFKMKZizc9Pc-Z4tR4KEBoiTlJPwRmppx-6tDRbQcWxoocln2y6YV6aOGHJGu2-FQkD_-lympuKEaLnaQgyO7ASDJceBEwaCFwhwlVbaxhaFv_7AwWv6cQNI-PV27QkAf5rxDtrGZPvwqzM4RhvMXdK3kZqWb_xltCWYdk1NOZYhehI2wMmlJI11z-21hPQ_XjqH7MIy21ropRJBUXjKB7r0lqHjsvhYJW7jSMf6Z_yne9nnR3lNXNwuZnAn3aBqHiYVxUbM9tFC2FuWgkFYf5xoiZgmc9Ouj5H0KEOLT3KeVduK6gY5eIiyOl4phT_B6ZhcZLn3z5Aks2dvpnWUrTLNYW2zUvtqMr3UwOogr56_3kgwiHonqaCNJkQyoGm0vLch2iebWcYq5ywtwcQM-UmDNmg1U9ARhhCkJOaOpWiXBJs7h72MGf5miBUBmGoHHraswnnxS0foGcVcpeNyxIEmiQQzeNcTRJEeY7rZMebKJtyiv8Ke5kyhFTjFinSrunPj8Pbeh7wyqp3bO2ccUshn0UZanBSv3PiKrh6ueI-oXw8JdOvFfDB5lc0n5vgh6kohltmh5uTufIHoLCPUaHu0rlDeo69VvYPEit5fRTScm87FZKCguAseSiLANgUdN8ofGYl7mXTnt2C3J6C7eydRXd0qOYW0CYsYIgSEwDK59GretPdbmCOLHK95r6eOUFWDxSa6jBwC-B3GjV2WY1Jhi9RaXaF_i6c-Vin4bTzrfWm-PbKX-4yx3v2K0i0eMSp2iUlhEcRR1QSwvriNuX9STY2FQ3Lhx-no9XR-k-QOgFPkQd-ezeLA9fMJ0kC5SuVTGpD-618QA6i9WJNMsX_T3inITTOjlELS_0tKR3eD2dUGrdHTVLdEEsSaHMH9xIeeUjEg9AqipUNkhGtDNKajVvp6g8m1qPU6SQiJr2oGE-gWSC7pwoHS4MMaKXZnH47_CzEQU0ZH4qCUCXMUNqffsJTNFvhWmIV0iFbvHT49dZgtQPik3_f0ClQn26bIFpdnG9S39f4BcYkP323sn-aiN-QvwBPr4ewbCfZ-qVgFrxaMGA0VI_-7oLbHNKsgTgxxLJ_yIqBkQo4OiTsdjdy_2aNdjc9Z-2_io6PaQ33OliIz7QXogjz3eRN-VphCG2lpkdl5RdMHx3N1yBmfy67YB_DjHSpx7mGzEunKlZP6pT7gSnWSBJAxSVoKAkYjDe9HVkbog8QBlCINgXThAOXgakhm_kZSg9oVRVPBzLvIEC0Ux_NrJhHxQEhQmcm9Qkq2KuMtiWHvZGgfZQgZbO5niEyRpXSpD1bYZK_-D6-aJY36GNf_zIDJvkbLqGSI-P8kPFNfq9GU2lVnQ7SKVA3pL4mGa9qX2NNc5a_MfxEd1uDBgAs0rqDVZd8ocBz-Xo"
    },
    Victor: {
        authorize: 'query_id=AAHnqZMFAwAAAOepkwXrP0mO&user=%7B%22id%22%3A6536014311%2C%22first_name%22%3A%22Victor%22%2C%22last_name%22%3A%22%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1730484184&hash=65642c5ae9cc5bf1327248ef0b73d36ef496fe2b23c8f6a5dce49d1e22818878&referrer=',
        x_api_key: '',
        x_recaptcha_key: "03AFcWeA6N93duUAWeCFFeYch6ZMDclgwBT6YrKMlfueDM0fm9ZO3DMNh4iBcCHfZVYwWTvPmQYh30UaFf156yosnZadwp51lQr103LmA_VKbu1-s09pB-HAoFQT1-8YHG1GIiMZOAaqC0CP9xWOJg0RIXKF7p220w9mBSC88PSqX3YgLL8ewXHVEAEk4_ih0ZM-r3Wpq7LR0-oraXQyNPUXb8KlQqrrMSCR9vjqHoPe3ZddVCpkGCDZ1GjRD9Lp8nfnJ5i-d2UO4Bb1q7wYd0Hdeyipdiax60b2loWaAP79C43h7uheNUYYOzbW3rUsWKKD7qKZlvjPAMPrCQoSKpI8xJFPifmxebseVeUMqXEgZzmVS-EaX2KcrEjI39ypLhjrvkaqLOq8vHAgWF3wD8iEWxxE1yMXFcM0uypYgprjtnHitwy4ooRnSmazMVeqrONGvrgncS_hAo8ODu-la5KTodCtFIZi86LEFO7G4YSXj4kUHCmIgOa64G1MeVdP0dQWeGPQWvVZesUPP4Bd7ajWRiUkAVzoCoUHA8aHl3JmPGU_IgXq9bvqFFxjrLhhgxhEXrvKkO9xl1ShCJmI20xROmRP-maX1xnLCmPcZ9LeV6jDtwjIY8sdQbwMziYSv805iMGhCRwKxIccDa-HxM_iXZiFNJRGDgWiaD0qZ8DhW-hgI2K--D50VqhlCWIUG1olM265iiGQ549dtyxsZuHZQ1A2rlXBTZLb5cT90PcGTtrZkJ_OZAZ0aJQYjsmT3Q6UXTMrgg89Rzx4cx8alhNoBBMiz5-qbRTHYogl6QFMzguwBSW8TYKLN9nJEOts_SkaY3neZy7yxTNlOVWVBW43xj8RcGMKEDu6NBPvs-Xw6f2cjWKJxpwmERZ39Nmxkkqkved9HbXtBYTWdZMKWfPTTiKqQmQV362ViS8dIwQjHZOYfxQ3QEC1T1hAS_aBlHyTAoCdAly18FRzDAxqScABgBZgFjKoZWaBWtXui4-UI6Jfc7waJeNhd0yFI95yPQ1T-wYkhEnbnvesDG5BAhcTH_Aff2xIV9IGO6UmLf-CumqYRT2EMdXQW-qkwRvPG2RddEoYBIxQuERIwKiLqUobb2dTW1ApZKL1-m0Q2Fr0Xf9Q7ZwgzYdhZJLO5933TXhav4j0d5YQB8PuR-99r0CJkCILH7Zyj8CtTXZJSEfOPoDUik7MDkMzujd5JmW5K7mwA4-F6LHgarJBSul4c9c_iD4QekflU3fmryIpVMsUnvzL_dfhXeLrucHfD_i-EBoCmOSwpVuL57OdDqkQpqdNDaSscy48Xssu3rITIXK1s4PJZFkrByomYOYyKvf0XHLe_fB7WOzh_TfkKcYe8iACjvoTlw9fkgl7zZB69ZpNtyhYvHXQbt00cszE9W-oLQfaB-oQX3HJ70A2jmGURxS0td7BWSck4DFMr-dPlUJjDYzr1bVHVdlLkxK-GqSudoHeHBI0VpFkZo01JbSAmqy_WArwpvHqjcPOkEnTqdQRAODOCkg_mQNMOSf2kvL_JSmHSz9XJknFRiTTFYOP2Jem23a2n9ohgIuPbZEbFpouuj492lbVKeeX2lqCZ6NiYa7KWD82EHqaGNqdLr_RmdoZVZmAP7Syi6xvNaHiDegnTdZTIozR2kVgftrG0smdMzu6J7MgGMmoVCm2iN5-CyH85RqIv-YiuTH3N0Mev24ZIh8o484VD_JWcM2r5Zn0TcvigJyes__djF68Bf6PIL_4VWiY5gJpZUv6Qcgx1iP7etKLLqBSUtizz-OZoyTCSQGYXPs-g-WLtbGbFyq4ivlN5L4xyNgNtA_rmbZvXvcyg7KwJeMRA9gYQ4zv_ajNJ9kwb5eNEgDR1P_WkZYkIg1Wm7MpnA-2phmLwDizGhjN6TeMAbjPNOQIdq-OJI6JP6Tevsb6SE0QArG_qFVCNO7ViZv9cfJO43fYle2SQL8iw_ar-ymmxpzPI"
    },
    Oxygenor: {
        authorize: 'user=%7B%22id%22%3A528344206%2C%22first_name%22%3A%22Oxygenor%22%2C%22last_name%22%3A%22%22%2C%22language_code%22%3A%22en%22%7D&chat_instance=-5216739892208058910&chat_type=private&start_param=r_684408653&auth_date=1730538382&hash=13194173e983debacc8ded6296101105f976a15566445653eb29eca16a88492b&referrer=',
        x_api_key: '',
        x_recaptcha_key: "03AFcWeA4bkPxtj7XYHFiJs6Bcc1_I8iYkKQY5CdkzJW4_YFj5QPNXxSFPUhfCCXc8cdu-Tp5C_5oZF_b_A7sMkcQEEV66y37GAmXk4PI-S4Pd4Rlgks2neRs0OwjW_P4iprU-h-xDyREYhoIZL1DxRJILCOtXieeMIwYaGTaObOOYOYpEWEJw-rp51TYKwnFz-GfcKVu0mv1Fvm0dPh4d67bc8bGGiN29Q092X5rJNOzo1BsP1wktzGOGC9BEDHqA6OwymPBR-6HQtfc31YLAdmntvRuQqcu0HQZxoa6WoVervdqhVi_IwhurkoecoWb8brBYX3BEv8PRqtO2cHFzxaf09qn-__plucrPg7J8hF1hh8ZLJEvlViHPCs81jl27mjFCDu5dDVf3Kvq0VS40CQ-BPM6PhvAiFvIrQzyHXz0b-zbxuDQZBjT12dfuk7d9qwjF67Dnfg0YQZzNp9MLTLhPkHbXOCFUEg3QYKC_nIQGQeXWraTBEfOoPj4RbwWY76HghPq1YKrbagMoB9xCy2jfH6Z_X8KsurA7TErFhpvdbs3DupwqKsd1wUJWyz25iL8MtZATzncpBjbdPtnKV18l1dOfblVPiCLt3wDRqgksU3C_16nR2jf6jZ_TtZpafwIz9BTiKzq6elmXfYhgp9--CjvRh_ZwuoDD-e-k0D8hEB2tsXKWGZ9m_ciEyxB7-Lu_of316LGKPam0W9o4WWZvOGyDsAVizQwsV-oaykllthOkmx4O_JzP4zuGsz8pC8Uo_RF0RXTkaAe5WW-Y-rLWSKKefdpPJcnhqSDXvZ41_xTuYBZNqRh8n8e_IKG3_0gqoDNqEICARkNxlLhB6URV6j8Isu_zKKiNEYCvZ2TuIpoQRbbCxvb1x4ANSMrhbdTWIBrddnTBEyb8vKpDl3zBce0xc3g2tAdmZSls9iwaNc22hYW8eW8i50Ga9Wf6bPzoRKVFyqz2c4HK5HCjirtBH3PdFtadO8O3jrP-orJA7OoaXFM-BdL1sqROR2AVlSdIFxtIxdEyGsphPZigyo6rEq_KnjId-_nyGiDSnSGbEKu4huGmHuB6lK2TuHHyjgZF2d1QoAHPCJv6_7ubLrPqGURfJwL0R_MrJ2owzhylGd8AJfHuwTZgJFDhDRtMOM8FJuWUr9FJK-1D5YWfa6FEt1CxYJBgGtIVF1LkV0ygudeVb2NEHGdcoCVX-xgc9MovT1-us2m9UrNsfCcBGaOKj_OjLg6PNkMxF1U5CAakKzIh8lAP0ZNewCUtksm9-jyw--YwWwpl5mIYkNXfEKhvzeTZQ8FVqyed9GibEte8MkdyKhet44h_jr9sC5IohVfA91k3bEgIm8pZj-puEO07zRZXNwBBXUvz4VBBpPTnoJMEGqq1uph-lLwdk7ery4yHtlO7ngrw20qFUzV1zTpvwJSByICQuXRQ1p-8-r77iiv7FxySaHuwG_uklJymSFfWczii-ykzzkHT-DcnEVSBeFntyaj1s8Dg8nT7v51zgbPELcFfY5dYH010xySiuOvzvViNGs51eWbmLaa2HE3GYMZyE-IzKYbEncqJRG3jHLm5JFvOIKAUiO4GwAAZdNME9oEgjtS6qwuu16N3aPcVlhxL-DpfXhP3JkPSn52m_tyN1xIQBjD8F5RtbBXvWxXanqKvnQ9wJPLlNm4AoT7Wgq0nqcbZU0nhY06PHkq-JhdKel9mXN1oRUTs9hfjaUkkNvpUX6APFg9R69fFEcPCJn17U7V9fUv0zkqpMUAJS5wSqw-TbNDV-ZyqdwwC2W6eoy3luBFUwZD8tSF9uAskA1bjTGL40gV4LqBD-B7ru6SDxwFo5k2E4vo69Jnrou-qIOoH1mFbT23x8xfFxRxw9uKaQlygCvaKRKc2z5pJvDDI4X9YQapMCJ8W8thZNeSHyq7ZxeA4ajoRaU-rcR3F2pKtKg4Nb9qzaym9RHo1B5fHnbLtNScNx9mxDVfnqEbBhsWL-vI0"
    },
}

async function getAuthorize(params) {
    const myHeaders = new Headers();
    myHeaders.append("x-recaptcha-key", `${params.x_recaptcha_key}`);
    myHeaders.append("Content-Type", "application/json");

    const raw = params;

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    let accessToken;

    await fetch("https://backend.babydogepawsbot.com/authorize", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            accessToken = result.access_token;
            debug && console.log("Result getAuthorize :", result);
            debug && console.log("Access Token:", accessToken);

        })
        .catch((error) => console.error(error));

    return accessToken;
}

async function getData(nameUser) {
    const accessToken = await getAuthorize(users[nameUser].authorize);

    return accessToken;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function tap(nameUser) {

    async function postTap(nameUser) {
        users[nameUser].x_api_key = await getData(nameUser);

        const myHeaders = new Headers();
        myHeaders.append("x-api-key", `${users[nameUser].x_api_key}`);
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "count": 1000
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("https://backend.babydogepawsbot.com/mine", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                console.log(`${nameUser} postTap OK!`)
                setInterval(() => {
                    postTap(nameUser);
                }, 1000 * 60 * 5) // Повтор коду через 5 хвилин
            })
            .catch((error) => console.error(error));
    }

    postTap(nameUser);

}

async function upgradeCards(nameUser) {



    let levelCardUpgrade = 20;
    async function repeatUpgradeCards(nameUser) {

        users[nameUser].x_api_key = await getData(nameUser);

        const myHeaders = new Headers();
        myHeaders.append("x-api-key", `${users[nameUser].x_api_key}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("https://backend.babydogepawsbot.com/cards", requestOptions)
            .then((response) => response.json())
            .then((result) => {

                if (result.message) {
                    console.log(`result.message = ${result.message}`)
                    return;
                }

                debug && console.log(`upgradeCards GET cards result = \n`)
                debug && console.log(result)
                const allCards = result.flatMap(category => category.cards);


                // Фильтрация объектов, где isAvailable равно true
                const availableItems = allCards.filter(item => item.is_available);



                // Сортировка по свойству farming_upgrade в порядке убывания
                const sortedItems = availableItems.sort((a, b) => b.farming_upgrade - a.farming_upgrade);

                let upgradeCardsGet10 = false;
                let filteredItems;
                do {
                    filteredItems = sortedItems.filter(item => item.cur_level <= levelCardUpgrade);

                    if (filteredItems.length >= 10) {
                        upgradeCardsGet10 = true;
                        debug && console.log('Кількість елементів більше 10, тому продовжуємо виконання коду...')
                        break;
                    }
                    debug && console.log('Кількість елементів меньше 10, тому збільшуємо умову рівня для покращених карт...')
                    levelCardUpgrade++;
                    delay(1000); // Затримка в 1 секунду
                }
                while (!upgradeCardsGet10)
                // Фильтрация объектов, где level не больше 15

                const sortedCards = filteredItems.sort((a, b) => (b.profitPerHourDelta / b.upgrade_cost) - (a.profitPerHourDelta / a.upgrade_cost))

                // Извлечение первых 10 объектов из отфильтрованного массива
                const top10FilteredItems = sortedCards.slice(0, 10);


                // console.log(`top10FilteredItems : \n`)
                // console.log(top10FilteredItems)
                // Пример URL для POST-запроса


                // Функция для выполнения POST-запроса
                const postObject = async (obj) => {
                    let objID = obj.id;
                    const myHeaders = new Headers();
                    myHeaders.append("x-api-key", `${users[nameUser].x_api_key}`);
                    myHeaders.append("Content-Type", "application/json");

                    const raw = JSON.stringify({
                        "id": objID
                    });

                    const requestOptions = {
                        method: "POST",
                        headers: myHeaders,
                        body: raw,
                        redirect: "follow"
                    };

                    fetch("https://backend.babydogepawsbot.com/cards", requestOptions) // Тут зупинився, зупинився на тому щоб дізнатись результат покращення картки, щоб потім по її ID дізнатись скільки часу в неї триває покращення
                        .then((response) => response.json())
                        .then((result) => {
                            if (result.message) {
                                console.log(`result.message = ${result.message}`)
                                return;
                            }
                            debug && console.log(`upgradeCards POST cards result = \n `)
                            debug && console.log(result)
                            const allCardsresult = result.cards.flatMap(category => category.cards);


                            // Фильтрация объектов, где isAvailable равно true
                            const availableItem = allCardsresult.filter(item => item.id === objID);

                            console.log("Покращена картка : ")
                            debug && console.log(availableItem)




                            if (availableItem[0].requirement && availableItem[0].requirement.required_value && obj.cur_level < levelCardUpgrade) {

                                const timestampMs = Math.floor(Math.abs(availableItem[0].requirement.required_value - Date.now()) / 1000) + 1;

                                console.log(`Картка ${availableItem[0].name} буде покращена знову через ${timestampMs} секунд.`)
                                debug && console.log(timestampMs)

                                setTimeout(() => {
                                    postObject(availableItem[0]);
                                }, 1000 * timestampMs);
                            }
                        })
                        .catch((error) => console.error(error));

                    return obj;
                };

                // Основная функция для отправки POST-запросов для каждого объекта
                const sendPostRequests = async (items) => {
                    const results = await Promise.all(items.map(postObject));
                    console.log('All POST requests completed');
                    return results;
                };

                // Отправка POST-запросов
                sendPostRequests(top10FilteredItems)
                    .then(results => {
                        //console.log('Results:', results);
                    });

            })
            .catch((error) => console.error(error));

        console.log(`${nameUser} repeatUpgradeCards OK!`)
        setTimeout(() => {
            repeatUpgradeCards(nameUser);
        }, 60000 * 30)
    }



    repeatUpgradeCards(nameUser);
}

async function getCoin(nameUser) {

    users[nameUser].x_api_key = await getData(nameUser);

    const myHeaders = new Headers();
    myHeaders.append("x-api-key", users[nameUser].x_api_key);

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    fetch("https://backend.babydogepawsbot.com/getMe", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            setTimeout(()=> {
                getCoin(nameUser);
            }, 1000 * 60 * 60 * 1)
        })
        .catch((error) => console.error(error));
}

Object.keys(users).forEach(async name => {
     tap(name);
    
     upgradeCards(name);
   
     getCoin(name);
});