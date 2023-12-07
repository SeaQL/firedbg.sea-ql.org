import React from "react";

export function Video({ src }) {
    const light = src.replace('-dark', '-light');
    const dark = src.replace('-light', '-dark');
    return (
        <>
            <video controls muted autoPlay loop style={{ "width": "100%" }} data-theme="light">
                <source src={light} type="video/mp4" />
            </video>
            <video controls muted autoPlay loop style={{ "width": "100%" }} data-theme="dark">
                <source src={dark} type="video/mp4" />
            </video>
        </>
    )
}

export function Image(props) {
    const light = props.src.replace('-dark', '-light');
    const dark = props.src.replace('-light', '-dark');
    const images = () => {
        return (
            <>
                <img style={{ width: '100%' }} src={`${light}#light`} />
                <img style={{ width: '100%' }} src={`${dark}#dark`} />
            </>
        );
    };
    if (props.children === undefined) {
        return images();
    }
    return (
        <table>
            <tbody>
                <tr style={{ backgroundColor: 'unset' }}>
                    <td>
                        {images()}
                    </td>
                </tr>
                <tr style={{ backgroundColor: 'unset' }}>
                    <td style={{ color: 'var(--ifm-blockquote-color)' }}>
                        {props.children}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
