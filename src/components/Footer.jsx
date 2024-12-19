
export const Footer = () => {
  return (
    <div className="bg-gray-700 text-sm p-16 flex flex-col gap-3">
      <div>
        <h3 className="text-xl text-gray-400">Contact:</h3>
      </div>
      <div className="flex gap-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g clipPath="url(#clip0_1_138)">
            <path d="M12 0C8.7435 0 8.334 0.015 7.0545 0.072C5.775 0.132 4.9035 0.333 4.14 0.63C3.33914 0.931229 2.61374 1.40374 2.0145 2.0145C1.40411 2.61404 0.931661 3.33936 0.63 4.14C0.333 4.902 0.1305 5.775 0.072 7.05C0.015 8.3325 0 8.7405 0 12.0015C0 15.2595 0.015 15.6675 0.072 16.947C0.132 18.225 0.333 19.0965 0.63 19.86C0.9375 20.649 1.347 21.318 2.0145 21.9855C2.6805 22.653 3.3495 23.064 4.1385 23.37C4.9035 23.667 5.7735 23.8695 7.0515 23.928C8.3325 23.985 8.7405 24 12 24C15.2595 24 15.666 23.985 16.947 23.928C18.2235 23.868 19.098 23.667 19.8615 23.37C20.6618 23.0686 21.3867 22.5961 21.9855 21.9855C22.653 21.318 23.0625 20.649 23.37 19.86C23.6655 19.0965 23.868 18.225 23.928 16.947C23.985 15.6675 24 15.2595 24 12C24 8.7405 23.985 8.3325 23.928 7.0515C23.868 5.775 23.6655 4.902 23.37 4.14C23.0684 3.33934 22.5959 2.61401 21.9855 2.0145C21.3864 1.40351 20.661 0.930968 19.86 0.63C19.095 0.333 18.222 0.1305 16.9455 0.072C15.6645 0.015 15.258 0 11.997 0H12.0015H12ZM10.9245 2.163H12.0015C15.2055 2.163 15.585 2.1735 16.8495 2.232C18.0195 2.2845 18.6555 2.481 19.0785 2.6445C19.638 2.862 20.0385 3.123 20.4585 3.543C20.8785 3.963 21.138 4.362 21.3555 4.923C21.5205 5.3445 21.7155 5.9805 21.768 7.1505C21.8265 8.415 21.8385 8.7945 21.8385 11.997C21.8385 15.1995 21.8265 15.5805 21.768 16.845C21.7155 18.015 21.519 18.6495 21.3555 19.0725C21.1631 19.5935 20.856 20.0647 20.457 20.451C20.037 20.871 19.638 21.1305 19.077 21.348C18.657 21.513 18.021 21.708 16.8495 21.762C15.585 21.819 15.2055 21.8325 12.0015 21.8325C8.7975 21.8325 8.4165 21.819 7.152 21.762C5.982 21.708 5.3475 21.513 4.9245 21.348C4.40325 21.1559 3.93169 20.8494 3.5445 20.451C3.14513 20.0641 2.83758 19.5925 2.6445 19.071C2.481 18.6495 2.2845 18.0135 2.232 16.8435C2.175 15.579 2.163 15.1995 2.163 11.994C2.163 8.79 2.175 8.412 2.232 7.1475C2.286 5.9775 2.481 5.3415 2.646 4.9185C2.8635 4.359 3.1245 3.9585 3.5445 3.5385C3.9645 3.1185 4.3635 2.859 4.9245 2.6415C5.3475 2.4765 5.982 2.2815 7.152 2.2275C8.259 2.1765 8.688 2.1615 10.9245 2.16V2.163ZM18.4065 4.155C18.2174 4.155 18.0301 4.19225 17.8554 4.26461C17.6807 4.33698 17.522 4.44305 17.3883 4.57677C17.2545 4.71048 17.1485 4.86923 17.0761 5.04394C17.0037 5.21864 16.9665 5.4059 16.9665 5.595C16.9665 5.7841 17.0037 5.97135 17.0761 6.14606C17.1485 6.32077 17.2545 6.47952 17.3883 6.61323C17.522 6.74695 17.6807 6.85302 17.8554 6.92539C18.0301 6.99775 18.2174 7.035 18.4065 7.035C18.7884 7.035 19.1547 6.88329 19.4247 6.61323C19.6948 6.34318 19.8465 5.97691 19.8465 5.595C19.8465 5.21309 19.6948 4.84682 19.4247 4.57677C19.1547 4.30671 18.7884 4.155 18.4065 4.155ZM12.0015 5.838C11.1841 5.82525 10.3723 5.97523 9.61347 6.27921C8.85459 6.58319 8.16377 7.03511 7.58123 7.60863C6.99868 8.18216 6.53605 8.86585 6.22026 9.61989C5.90448 10.3739 5.74185 11.1833 5.74185 12.0007C5.74185 12.8182 5.90448 13.6276 6.22026 14.3816C6.53605 15.1356 6.99868 15.8193 7.58123 16.3929C8.16377 16.9664 8.85459 17.4183 9.61347 17.7223C10.3723 18.0263 11.1841 18.1763 12.0015 18.1635C13.6193 18.1383 15.1623 17.4779 16.2975 16.3249C17.4326 15.1719 18.0689 13.6188 18.0689 12.0007C18.0689 10.3827 17.4326 8.82962 16.2975 7.67662C15.1623 6.52363 13.6193 5.86324 12.0015 5.838ZM12.0015 7.9995C13.0625 7.9995 14.08 8.42098 14.8303 9.17122C15.5805 9.92146 16.002 10.939 16.002 12C16.002 13.061 15.5805 14.0785 14.8303 14.8288C14.08 15.579 13.0625 16.0005 12.0015 16.0005C10.9405 16.0005 9.92296 15.579 9.17272 14.8288C8.42248 14.0785 8.001 13.061 8.001 12C8.001 10.939 8.42248 9.92146 9.17272 9.17122C9.92296 8.42098 10.9405 7.9995 12.0015 7.9995Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_1_138">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M7.539 22.4999C16.596 22.4999 21.5505 14.9954 21.5505 8.49894C21.5505 8.28894 21.5505 8.07594 21.5415 7.86594C22.5061 7.16767 23.3386 6.30317 24 5.31294C23.099 5.71022 22.1441 5.97205 21.1665 6.08994C22.1963 5.4744 22.9676 4.50589 23.337 3.36444C22.3695 3.93763 21.3105 4.34 20.2065 4.55394C19.4643 3.76348 18.4821 3.23982 17.4121 3.06408C16.3421 2.88834 15.2441 3.07032 14.288 3.58185C13.3319 4.09337 12.5712 4.90588 12.1237 5.89353C11.6761 6.88118 11.5668 7.98884 11.8125 9.04494C9.85461 8.94677 7.93922 8.43814 6.19056 7.55206C4.4419 6.66597 2.89903 5.42221 1.662 3.90144C1.03401 4.98607 0.842361 6.26904 1.12597 7.48984C1.40958 8.71064 2.14718 9.77774 3.189 10.4744C2.40831 10.4479 1.64478 10.2383 0.96 9.86244V9.92994C0.961346 11.0662 1.35496 12.1671 2.07431 13.0466C2.79366 13.9261 3.79462 14.5303 4.908 14.7569C4.48539 14.8734 4.04884 14.9314 3.6105 14.9294C3.30148 14.9304 2.99307 14.9017 2.6895 14.8439C3.00418 15.822 3.61691 16.6772 4.44187 17.2897C5.26683 17.9021 6.2627 18.2412 7.29 18.2594C5.54483 19.6301 3.3891 20.3736 1.17 20.3699C0.778981 20.3716 0.388235 20.349 0 20.3024C2.25227 21.7383 4.86795 22.5008 7.539 22.4999Z" fill="white"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
          <g clipPath="url(#clip0_1_136)">
            <path d="M14.5924 3.62317H14.7538C16.2436 3.62861 23.7927 3.68298 25.8281 4.23036C26.4435 4.39741 27.0042 4.72303 27.4542 5.17468C27.9043 5.62633 28.2279 6.18819 28.3928 6.80411C28.5759 7.49286 28.7046 8.40454 28.7916 9.34523L28.8097 9.53373L28.8496 10.005L28.8641 10.1935C28.9819 11.8501 28.9964 13.4016 28.9982 13.7405V13.8765C28.9964 14.2281 28.9801 15.8847 28.8496 17.6102L28.8351 17.8005L28.8187 17.989C28.7281 19.0258 28.594 20.0553 28.3928 20.8129C28.2284 21.4291 27.905 21.9912 27.4548 22.4429C27.0047 22.8947 26.4437 23.2201 25.8281 23.3867C23.7256 23.9522 15.7343 23.992 14.6269 23.9939H14.3695C13.8094 23.9939 11.4931 23.983 9.06431 23.8996L8.75619 23.8887L8.5985 23.8815L8.28856 23.8688L7.97862 23.8561C5.96675 23.7673 4.05094 23.6241 3.16825 23.3849C2.55289 23.2185 1.99206 22.8933 1.54194 22.4419C1.09182 21.9905 0.768222 21.4288 0.603563 20.8129C0.402375 20.0571 0.26825 19.0258 0.177625 17.989L0.163125 17.7987L0.148625 17.6102C0.0591738 16.3821 0.00960601 15.1513 0 13.92L0 13.697C0.003625 13.3074 0.018125 11.9607 0.116 10.4744L0.128688 10.2877L0.134125 10.1935L0.148625 10.005L0.1885 9.53373L0.206625 9.34523C0.293625 8.40454 0.422312 7.49104 0.605375 6.80411C0.769757 6.18794 1.09323 5.62582 1.54337 5.17409C1.9935 4.72237 2.55448 4.39691 3.17006 4.23036C4.05275 3.99473 5.96856 3.84973 7.98044 3.75911L8.28856 3.74642L8.60031 3.73554L8.75619 3.73011L9.06612 3.71742C10.7911 3.66191 12.5168 3.63109 14.2426 3.62498H14.5924V3.62317ZM11.6 9.44129V18.1739L19.1346 13.8094L11.6 9.44129Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_1_136">
              <rect width="29" height="29" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="text-gray-400   flex gap-5">
        <p>© 2024 All rights reserved</p>
        <a href="">Impressum</a>
      </div>
    </div>
  )
}