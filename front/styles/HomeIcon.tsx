
type Props = {
  className: string;
}

/* eslint-disable-next-line react/display-name */
export const HomeIcon = (props: Props) => {

    const { className } = props

    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.9 512.1">
            <path d="M498.2 222.7 289.3 13.8C280.4 4.9 268.6 0 256 0s-24.4 4.9-33.3 13.8L13.9 222.6l-.2.2c-18.3 18.4-18.2 48.2.1 66.6 8.4 8.4 19.4 13.2 31.3 13.7.5 0 1 .1 1.5.1h8.3v153.7c0 30.4 24.7 55.2 55.2 55.2h81.7c8.3 0 15-6.7 15-15V376.5c0-13.9 11.3-25.2 25.2-25.2h48.2c13.9 0 25.2 11.3 25.2 25.2V497c0 8.3 6.7 15 15 15H402c30.4 0 55.2-24.7 55.2-55.2V303.1h7.7c12.6 0 24.4-4.9 33.3-13.8 18.3-18.3 18.3-48.2 0-66.6z"/>
        </svg>
    );
}


export default HomeIcon