let users = {
    AXL: {
        authorize: 'user=%7B%22id%22%3A684408653%2C%22first_name%22%3A%22AXL%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22AXL_SL%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=1625636399340972122&chat_type=private&start_param=r_957714030&auth_date=1730229579&hash=7d1bb7d031b68df9ccffab58bc3d936ce0e40aa07180f3642110903149e50b07&referrer=',
        x_recaptcha_key: "03AFcWeA6E9NFV6d1HpCpCtAI_h_5WUJXNpvERPTOxplE0WjlNoxCSRPQoYL_9UajQMjtDnpPgrhIeACap1EB0dPUgmu0AgMF3xGJuyt1isw0qgHsVFLDRqkXmPCWl-lf8tQGRrWH_N33GmEJnrDVAvRHJrHb1_YcYNZ5BmGARJDX0-5uCmgoaS01WSHMimKeLoluFCKfSZW1v9qMx-DgFRYu-J-F0_YT9qpWh6Zg59VI3_rsk2U6jerRZE8Enquvr6i7ahCrQqdlBO9-OqrsC2teGvWuuLLRsoqS-Vq4RSNhzP_kX28UF-Xa2oNuZ40-2Ym4qbs0kKkHy4MG4pUvN1HkNv_udZHYjIMFcgqB1WqjYJadZZj7x76RuvwxvhF_pH9xw29D4LL0IFYC0GXpFvXuN5TbdI3DRXJGfJaOGvcHV6v1WJlgGWXHUMb8JOWcS7h3eNfyGx4U9nvrhBwVUXR8txI02i4ooG77ABR_8QP74sRQ8NoURzT4fm-8Z8fjcCQ8opao35ORGzmOPYgtVTS2UG4LPnYJ7nz1wgpPWlMHbVHI_grEj2YXb9qD-6uSj9_XJ5Pxg8g4-w0Q8ndiodAiUPbmjqPPIjmB4RqqzrWapM9w0817fuGpwOZNhdSLsUiEph9NfzrVW5gee4p09jlxB1Lj7D_6lowKDzb25pLY2em27YaqqVqaxQSRhR5upzc3C7fXyiLZRlSt96YRCoekIH8CFl5j94L2bsvWXIu5_8wlY1-Ce5d2OjnPm4YwhmZzcS95lnIbkSqWefz1MWLwwx15Awg2twvzGIs2g4-RkQ949fpaCwdbEahVuft3mP9pY0Dd8kTSghsDE0zIH_IyiDKp1PZzZ7-x1RlP8MMmkbaeiVLJab1U7scqhcjc4txRuBv2zSTHabAQ_gz6l_n-U6JwXK3PgqTctS7fpCPDHHnW5pUdA_YZPv2hHo1rjNMk5_uW9S_YcCIUmyXWn12Q9t4Pt8AI8HXugwLk1wkFpq2Q9XuevkrjRvO_XYaZlyvrwDQ9GNViCU773tbkEqCaRNjOWqmw7kmSWdAGkxs_fGdRTo6vTGEdgBG7Npbvr8ghW--zX3gaSIYsLUWAjn5R_ZCKVgHx1SqpV3Cb-8ADMbPBtpU23hWC4cXWi_AO5LAotKUAUUI0Mdq4GxkqwD5jWY7ZKTjf0Y1D4Nxrm7soherQ0xRqwHjFq9eQC-RpY0UVok3GjGNuYsWUsbjIdW3jq4n9iUyhpmbnPsUIcfC2r0gItlCRq67khrbP26AX-0hcKqbn4SFbskxd2-7J3VA_Q4puOAkHXqrYBcVWrM1mvVCMA8Rw8Byx1VN8TCiTMh2MhOV5koT9XO3hHo_2s-NLQiufIotC_9ufaAgL4i-iVNC4d8_-PLvs8dNxfe27m_cmHropHcEe4lmodRtmdzCUjMrXKJEKl4ta68Wg9jOZg4t-WD7p_UNUzfsdxYSdZp2fxiTCpZ9pluhwZIktwpN1X__Iev3BoIHcEhdHhdxwZhXxP903LcXVeYzHdL3r8B7mgm02UxWkpyZeKWkocWHHl8OndGCAHdz-RzSzrEm_nbs3nmWiJ_Z68Qrvpyrpz8tpc2HYwXFGpv99H07MBjRj8-3AIzA3iCCA6AB-spx51yay3nRKJB89yPrPkFbKl6AhRVChBZ7RmSosVbRK0qXKHtM0FoZ1dxLO9nHGeEJUIaE7RnAcN61k3Ln74QjlQqbbg5xRS7rOQzs5iP3bzoy0yUoaYTLwcZG6rN91PO9F-Cq9HssvsYOHjKAtLWTejb_hepP8qPLVQztCH7JZt4tPA0oTtskbD5d7HUC32M91rlhznVxB6G60udIYbD7WB-wf_dmxpN3zZFvSyA-B08zPYiqTcgiB5ykvazgfW0C0cpTzVCb-mvXHycdsyMfXFjmcWDgk90rxdeIa7spJOYBSgxIrar1AKomZC12U2N20TU05ET5JXV8c"
    }
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
            console.log("Access Token:", accessToken);

        })
        .catch((error) => console.error(error));

    return accessToken;
}

async function tap(params) {
    const myHeaders = new Headers();
    myHeaders.append("x-api-key", `${params}`);
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
        .then((result) => console.log("tap OK!"))
        .catch((error) => console.error(error));
}

async function getData(user) {
    const accessToken = await getAuthorize(user);
    tap(accessToken);
}

//getData(users.AXL.authorize);

setInterval(() => {
    getData(users.AXL.authorize);

}, 1000 * 60 * 5)
