import { FC, ReactElement } from 'react';

const css = `#nprogress{--h:2px;pointer-events:none;}#nprogress .bar{background:var(--nprogress-color);position:fixed;z-index:1031;top:0;left:0;width:100%;height:var(--h);}#nprogress .peg {display: block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px var(--nprogress-color),0 0 5px var(--nprogress-color);opacity:1.0;-webkit-transform:rotate(3deg) translate(0px, -4px);-ms-transform:rotate(3deg) translate(0px, -4px);transform:rotate(3deg) translate(0px, -4px)}`;

export const NProgressStyle: FC = (): ReactElement => <style>{css}</style>;
