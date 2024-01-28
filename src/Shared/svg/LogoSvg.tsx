import {FC} from "react";

interface LogoSvgProps {
    className: string
}
const LogoSvg: FC<LogoSvgProps>  = ({className}) => (
    <>
        <svg className={className}  width="69" height="96" viewBox="0 0 69 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45.84 0L24.84 68H3.5L14.25 33.19L24.5 0H45.84Z" fill="#A2A2A2"/>
            <path d="M67.29 67.55H45.96L42.17 55.2899V55.28L37 38.5401L47.67 4L67.29 67.55Z" fill="url(#paint0_linear_2406_73)"/>
            <g opacity="0.4">
                <path d="M43.13 2L6.21 66L25.98 2H43.13Z" fill="url(#paint1_linear_2406_73)"/>
            </g>
            <g opacity="0.3">
                <path d="M47.4699 4.44995L41.9699 55.735L36.7979 38.99L47.4699 4.44995Z" fill="black"/>
            </g>
            <g opacity="0.3">
                <path d="M45.84 0L24.84 68H3.5C7.06 67.79 10.61 67.7 14.17 67.54L19.5 67.38L24.27 67.269C25.85 61.739 27.48 56.2193 29.16 50.71L31.76 42.21L34.42 33.72C36.23 28.07 38.06 22.43 39.95 16.8C40.91 14 41.85 11.18 42.84 8.39C43.83 5.6 44.8 2.779 45.84 0Z" fill="black"/>
                <path d="M45.84 0L24.84 68H3.5C7.06 67.79 10.61 67.7 14.17 67.54L19.5 67.38L24.27 67.269C25.85 61.739 27.48 56.2193 29.16 50.71L31.76 42.21L34.42 33.72C36.23 28.07 38.06 22.43 39.95 16.8C40.91 14 41.85 11.18 42.84 8.39C43.83 5.6 44.8 2.779 45.84 0Z" fill="#715E1A" fillOpacity="0.2"/>
            </g>
            <g opacity="0.3">
                <path d="M40.34 0C37.7 0.269 35.06 0.44 32.42 0.57C31.1 0.648666 29.78 0.708667 28.46 0.75C27.36 0.79 26.27 0.829999 25.17 0.858999L24.14 4.43L22.89 8.59L21.59 12.729C21.16 14.12 20.71 15.489 20.25 16.859C19.79 18.229 19.34 19.609 18.85 20.979C18.36 22.349 17.91 23.72 17.4 25.07C16.42 27.8 15.38 30.51 14.25 33.19L24.5 0H40.34Z" fill="#020101"/>
            </g>
            <g opacity="0.3">
                <path d="M56.4198 67.5289C59.6298 67.4199 62.8298 67.329 66.0398 67.26C65.2698 64.95 64.5198 62.6399 63.7698 60.32C62.9098 57.6899 62.0698 55.0496 61.2498 52.399C59.5798 47.12 57.9698 41.81 56.3698 36.51L54.0198 28.5289L51.7398 20.5289C50.9998 17.8589 50.2498 15.19 49.5598 12.51C48.8498 9.81995 48.1198 7.14895 47.4698 4.44995L67.0898 68H45.7598C49.3098 67.7739 52.8698 67.68 56.4198 67.5289Z" fill="white" fillOpacity="0.13"/>
            </g>
            <path d="M13.3321 71.636H14.0521H14.0641C14.1681 71.676 14.2281 71.72 14.2441 71.768L17.1241 79.076L17.1481 79.136H17.7961H18.4321V79.568V80H18.2881L17.2561 79.976C16.6721 79.968 16.0401 79.968 15.3601 79.976L14.1961 80H14.0401V79.568V79.136H14.5561L15.0721 79.124L14.8561 78.584L14.6401 78.044H13.1641C12.1801 78.044 11.6881 78.048 11.6881 78.056L11.4721 78.596L11.2681 79.124C11.2681 79.132 11.4401 79.136 11.7841 79.136H12.2881V79.568V80H12.1681L11.2801 79.976C10.7601 79.968 10.2801 79.968 9.84009 79.976L9.08409 80H8.97609V79.568V79.136H9.61209H10.2601L10.2841 79.076L13.1641 71.768C13.1881 71.728 13.2441 71.684 13.3321 71.636ZM13.7401 75.74L13.1761 74.3H13.1641L12.0361 77.18H13.1761L14.3041 77.168L13.7401 75.74ZM19.3938 72.2V71.768H21.0498H22.7178L22.7658 71.792C22.7898 71.8 23.4978 72.66 24.8898 74.372C26.3058 76.116 27.0018 76.976 26.9778 76.952L27.0138 76.988V74.816V72.632H26.3658H25.7178V72.2V71.768H25.8378L26.7138 71.792C27.2258 71.8 27.7378 71.8 28.2498 71.792C28.8258 71.776 29.1178 71.768 29.1258 71.768H29.2458V72.2V72.632H28.5978H27.9498V76.232C27.9498 78.624 27.9418 79.836 27.9258 79.868C27.9098 79.916 27.8778 79.952 27.8298 79.976C27.7978 79.992 27.6818 80 27.4818 80C27.2818 80 27.1658 79.992 27.1338 79.976C27.1178 79.968 26.2018 78.852 24.3858 76.628C22.5538 74.348 21.6458 73.224 21.6618 73.256L21.6258 73.22V76.172V79.136H22.2738H22.9218V79.568V80H22.8018C22.8098 80 22.5178 79.992 21.9258 79.976C21.4138 79.968 20.9018 79.968 20.3898 79.976C19.7978 79.992 19.5058 80 19.5138 80H19.3938V79.568V79.136H20.0418H20.6898V75.884V72.632H20.0418H19.3938V72.2ZM30.4745 71.972V71.9H34.5185H38.5745V71.972L38.7065 73.496C38.7785 74.496 38.8185 75.004 38.8265 75.02V75.092H38.3945C38.1065 75.092 37.9625 75.088 37.9625 75.08C37.9625 74.92 37.9425 74.712 37.9025 74.456C37.8545 74.096 37.7865 73.8 37.6985 73.568C37.5785 73.288 37.3745 73.08 37.0865 72.944C36.9665 72.88 36.8065 72.832 36.6065 72.8C36.5345 72.784 36.3305 72.772 35.9945 72.764H35.5265V75.944V79.136H36.4505H37.3625V79.568V80H37.1705L35.7545 79.976C34.9305 79.968 34.1105 79.968 33.2945 79.976L31.8785 80H31.6865V79.568V79.136H32.6105H33.5225V75.944V72.764H33.0545C32.7185 72.772 32.5145 72.784 32.4425 72.8C32.0665 72.872 31.7785 73.012 31.5785 73.22C31.4505 73.348 31.3465 73.54 31.2665 73.796C31.2025 74.028 31.1505 74.384 31.1105 74.864C31.0945 75 31.0865 75.072 31.0865 75.08C31.0865 75.088 30.9425 75.092 30.6545 75.092H30.2225V75.02L30.3545 73.496C30.4265 72.496 30.4665 71.988 30.4745 71.972ZM44.1041 71.648C44.3681 71.632 44.7001 71.636 45.1001 71.66C46.1881 71.78 47.0641 72.168 47.7281 72.824C48.3761 73.472 48.7641 74.324 48.8921 75.38C48.9241 75.7 48.9241 76.048 48.8921 76.424C48.8921 76.44 48.8921 76.456 48.8921 76.472C48.7721 77.472 48.4041 78.288 47.7881 78.92C47.4921 79.208 47.1561 79.448 46.7801 79.64C46.2841 79.88 45.7241 80.036 45.1001 80.108C44.7641 80.14 44.3881 80.14 43.9721 80.108C43.9481 80.108 43.9281 80.108 43.9121 80.108C42.7761 79.972 41.8841 79.576 41.2361 78.92C40.6121 78.296 40.2401 77.48 40.1201 76.472C40.0881 76.168 40.0881 75.824 40.1201 75.44C40.1201 75.416 40.1201 75.396 40.1201 75.38C40.1841 74.9 40.2841 74.492 40.4201 74.156C40.7801 73.236 41.3841 72.568 42.2321 72.152C42.7761 71.872 43.4001 71.704 44.1041 71.648ZM44.7521 72.428C44.0801 72.356 43.5081 72.536 43.0361 72.968C42.9241 73.072 42.8241 73.188 42.7361 73.316C42.5201 73.644 42.3721 74.052 42.2921 74.54C42.2121 75.124 42.2001 75.82 42.2561 76.628C42.2641 76.7 42.2721 76.768 42.2801 76.832C42.3681 77.752 42.6561 78.42 43.1441 78.836C43.6721 79.276 44.2721 79.424 44.9441 79.28C45.2881 79.208 45.5961 79.06 45.8681 78.836C46.3561 78.42 46.6441 77.752 46.7321 76.832C46.8121 76.16 46.8161 75.448 46.7441 74.696C46.7361 74.64 46.7281 74.588 46.7201 74.54C46.6641 74.196 46.5681 73.876 46.4321 73.58C46.0961 72.9 45.5361 72.516 44.7521 72.428ZM50.1672 72.2V71.768H51.8232H53.4912L53.5392 71.792C53.5632 71.8 54.2712 72.66 55.6632 74.372C57.0792 76.116 57.7752 76.976 57.7512 76.952L57.7872 76.988V74.816V72.632H57.1392H56.4912V72.2V71.768H56.6112L57.4872 71.792C57.9992 71.8 58.5112 71.8 59.0232 71.792C59.5992 71.776 59.8912 71.768 59.8992 71.768H60.0192V72.2V72.632H59.3712H58.7232V76.232C58.7232 78.624 58.7152 79.836 58.6992 79.868C58.6832 79.916 58.6512 79.952 58.6032 79.976C58.5712 79.992 58.4552 80 58.2552 80C58.0552 80 57.9392 79.992 57.9072 79.976C57.8912 79.968 56.9752 78.852 55.1592 76.628C53.3272 74.348 52.4192 73.224 52.4352 73.256L52.3992 73.22V76.172V79.136H53.0472H53.6952V79.568V80H53.5752C53.5832 80 53.2912 79.992 52.6992 79.976C52.1872 79.968 51.6752 79.968 51.1632 79.976C50.5712 79.992 50.2792 80 50.2872 80H50.1672V79.568V79.136H50.8152H51.4632V75.884V72.632H50.8152H50.1672V72.2ZM24.3986 84.648C24.4306 84.632 24.5586 84.632 24.7826 84.648C25.0626 84.648 25.3186 84.672 25.5506 84.72C26.0466 84.832 26.4906 85.04 26.8826 85.344C26.9466 85.384 26.9786 85.4 26.9786 85.392C26.9866 85.392 27.1346 85.272 27.4226 85.032C27.7426 84.776 27.8986 84.652 27.8906 84.66C27.9546 84.62 28.0706 84.62 28.2386 84.66C28.2786 84.684 28.3026 84.724 28.3106 84.78C28.3186 84.86 28.3226 85.38 28.3226 86.34C28.3226 87.404 28.3106 87.952 28.2866 87.984L28.2386 88.008C28.2066 88.024 28.0786 88.032 27.8546 88.032C27.6306 88.032 27.5026 88.024 27.4706 88.008C27.4146 87.968 27.3826 87.908 27.3746 87.828C27.3266 87.316 27.1426 86.84 26.8226 86.4C26.4386 85.88 25.9466 85.584 25.3466 85.512C24.9226 85.456 24.4426 85.508 23.9066 85.668C23.0666 85.908 22.5186 86.404 22.2626 87.156C22.1266 87.556 22.0586 88.132 22.0586 88.884C22.0586 89.436 22.0866 89.856 22.1426 90.144C22.3106 91.072 22.8146 91.696 23.6546 92.016C24.2066 92.232 24.7866 92.308 25.3946 92.244C25.5466 92.236 25.6746 92.212 25.7786 92.172C26.0186 92.084 26.1786 91.968 26.2586 91.824C26.2986 91.712 26.3186 91.468 26.3186 91.092V90.552H25.4546H24.5906V90.12V89.688H24.7826L26.1386 89.712C26.9306 89.72 27.6066 89.72 28.1666 89.712L29.1506 89.688H29.2826V90.12V90.552H28.8026H28.3226V91.704C28.3226 92.512 28.2946 92.936 28.2386 92.976C28.1826 93 28.0666 92.98 27.8906 92.916C27.4586 92.772 27.1546 92.648 26.9786 92.544L26.8826 92.484L26.7866 92.568C26.4346 92.848 25.9426 93.028 25.3106 93.108C25.0466 93.14 24.6986 93.144 24.2666 93.12C24.2266 93.112 24.1946 93.108 24.1706 93.108C23.6826 93.068 23.2146 92.976 22.7666 92.832C21.8706 92.536 21.1746 92.044 20.6786 91.356C20.2786 90.78 20.0306 90.128 19.9346 89.4C19.9026 89.112 19.9026 88.784 19.9346 88.416C19.9346 88.392 19.9346 88.372 19.9346 88.356C20.0306 87.636 20.2786 86.988 20.6786 86.412C21.2306 85.636 22.0346 85.112 23.0906 84.84C23.4666 84.744 23.9026 84.68 24.3986 84.648ZM34.8301 84.636H35.5501H35.5621C35.6661 84.676 35.7261 84.72 35.7421 84.768L38.6221 92.076L38.6461 92.136H39.2941H39.9301V92.568V93H39.7861L38.7541 92.976C38.1701 92.968 37.5381 92.968 36.8581 92.976L35.6941 93H35.5381V92.568V92.136H36.0541L36.5701 92.124L36.3541 91.584L36.1381 91.044H34.6621C33.6781 91.044 33.1861 91.048 33.1861 91.056L32.9701 91.596L32.7661 92.124C32.7661 92.132 32.9381 92.136 33.2821 92.136H33.7861V92.568V93H33.6661L32.7781 92.976C32.2581 92.968 31.7781 92.968 31.3381 92.976L30.5821 93H30.4741V92.568V92.136H31.1101H31.7581L31.7821 92.076L34.6621 84.768C34.6861 84.728 34.7421 84.684 34.8301 84.636ZM35.2381 88.74L34.6741 87.3H34.6621L33.5341 90.18H34.6741L35.8021 90.168L35.2381 88.74ZM40.8918 85.2V84.768H43.4598C45.2198 84.768 46.1358 84.772 46.2078 84.78C47.1998 84.852 47.9478 85.152 48.4518 85.68C48.7638 86.016 48.9598 86.412 49.0398 86.868C49.0558 86.94 49.0638 87.064 49.0638 87.24C49.0638 87.464 49.0438 87.648 49.0038 87.792C48.9078 88.224 48.6838 88.596 48.3318 88.908C47.8838 89.292 47.3158 89.532 46.6278 89.628C46.4118 89.66 45.9238 89.676 45.1638 89.676H44.1918V90.9V92.136H44.8398H45.4878V92.568V93H45.3318C45.3398 93 44.9558 92.992 44.1798 92.976C43.5158 92.968 42.8518 92.968 42.1878 92.976L41.0478 93H40.8918V92.568V92.136H41.5398H42.1878V88.884V85.632H41.5398H40.8918V85.2ZM45.9198 85.656C45.8718 85.648 45.5518 85.64 44.9598 85.632H44.1198V87.252V88.884H44.8398C45.5438 88.884 45.9998 88.852 46.2078 88.788C46.4798 88.708 46.6678 88.584 46.7718 88.416C46.8918 88.208 46.9478 87.776 46.9398 87.12C46.9318 86.744 46.9078 86.48 46.8678 86.328C46.8358 86.192 46.7798 86.084 46.6998 86.004C46.5558 85.836 46.2958 85.72 45.9198 85.656Z" fill="currentColor"/>
            <defs>
                <linearGradient id="paint0_linear_2406_73" x1="59.3237" y1="68.3761" x2="27.3228" y2="49.4259" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0.64"/>
                    <stop offset="0.185" stopColor="#ECE5FC" stopOpacity="0.56"/>
                    <stop offset="0.666667" stopColor="#B6A8EC"/>
                    <stop offset="1" stopColor="#C9BFEF"/>
                </linearGradient>
                <linearGradient id="paint1_linear_2406_73" x1="24.67" y1="2" x2="24.67" y2="66" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#CAA9FF"/>
                    <stop offset="0.24" stopColor="#D1B7FD"/>
                    <stop offset="0.81" stopColor="#FEFEFE"/>
                    <stop offset="1" stopColor="white"/>
                </linearGradient>
            </defs>
        </svg>
    </>
);

export default LogoSvg;