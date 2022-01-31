var soKM = 0;
var thoiGianCho = 0;
var typeCar = '';
var tongTien = 0;
document.querySelector('#tinhTien').onclick = function () {
    var uberXPrice = [8000, 12000, 10000, 2000];
    var uberSUVPrice = [9000, 14000, 12000, 3000];
    var uberBlackPrice = [10000, 16000, 14000, 4000];
    if (document.querySelector('#uberX').checked) {
        var type = uberXPrice;
        typeCar = document.getElementById('uberX').nextElementSibling.htmlFor;
    } else if (document.querySelector('#uberSUV').checked) {
        var type = uberSUVPrice;
        typeCar = document.getElementById('uberSUV').nextElementSibling.htmlFor;
    } else {
        var type = uberBlackPrice;
        typeCar = document.getElementById('uberBlack').nextElementSibling.htmlFor;
    }
    soKM = document.querySelector('#soKM').value;
    thoiGianCho = document.querySelector('#thoiGianCho').value;
    const reg = /^-?\d*\.?\d*$/
    if (soKM > 0 && thoiGianCho >= 0 && soKM.match(reg) && thoiGianCho.match(reg)) {
        if (soKM <= 1) {
            tongTien = 1 * type[0] + thoiGianCho * type[3];
        }
        else if (soKM <= 20) {
            tongTien = 1 * type[0] + (soKM - 1) * type[1] + thoiGianCho * type[3];
        }
        else if (soKM >= 21) {
            tongTien = 1 * type[0] + 19 * type[1] + (soKM - 20) * type[2] + thoiGianCho * type[3];
        }
        document.querySelector('#xuatTien').innerText = tongTien;
        document.querySelector('#divThanhTien').style.display = 'block';
        document.querySelector('#hoaDon').disabled = false;

    } else {
        document.querySelector('#divThanhTien').style.display = 'none';
        document.querySelector('#hoaDon').disabled = true;
        if (soKM <= 0 || !soKM.match(reg)) {
            document.querySelector('#soKM').focus();
        }
        else {
            document.querySelector('#thoiGianCho').focus();
        }
    }

}
document.querySelector('#hoaDon').onclick = function () {
    document.querySelector('#car-type-invoice').innerText = typeCar;
    document.querySelector('#soKM-show-invoice').innerText = soKM + ' km';
    document.querySelector('#thoiGianCho-show-invoice').innerText = thoiGianCho + ' phút';
    document.querySelector('#tongTien-show-invoice').innerText = tongTien + ' vnd';

}
