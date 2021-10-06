function toast({ title = '',
                 message = '',
                 type = 'info',
                 duration = 3000}) {    
    const main = document.getElementById('toast');
    if(main) {
        const toast = document.createElement('div');
        // AUTO REMOVE TOAST
        const autoRemovveID =  setTimeout(function () {
            main.removeChild(toast)
        },duration + 1000)
            
        toast.onclick = function (e) {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemovveID)
            }
        }
        const icons  = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
           warning: 'fas fa-exclamation-circle',
            error: 'fas fa-exclamation-circle',
        };
        const icon = icons[type];
        const delay = (duration/1000).toFixed(2)

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`
        toast.innerHTML = `
        <div class="toast__iocn">
        <i class="${icon}"></i>
         </div>
         <div class="toast__body">
        <div class="toast__title">${title}</div>
        <div class="toast__msg">${message}</div>
         </div>
            <div class="toast__close">
        <i class="fas fa-times"></i>
        </div>
        `;
        main.appendChild(toast);
      
    }
}


function showSuccessToast() {
    toast({
        title: 'Thành công!',
        message:'Bạn đã dăng ký thành công tài khoản tại NVQ',
        type:'success',
        duration:3000,
    })
 }
 function showErrorToast() {
    toast({
        title: 'Thất bại!',
        message:'Có lỗi xảy r, vui lòng liên hệ quản trị viên',
        type:'error',
        duration:3000,
    })
 }