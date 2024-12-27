import { Bounce, ToastOptions } from 'react-toastify'

export const SuccessConfig: ToastOptions<unknown> | undefined = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
  transition: Bounce,
}
