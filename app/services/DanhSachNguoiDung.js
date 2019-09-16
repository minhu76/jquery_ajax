function DanhSachNguoiDung() {
  /* Lây danh sách nguời dùng */
  this.layDanhSachNguoiDung = function () {
    return $.ajax({
      url: "http://5d78df44a8c2710014986699.mockapi.io/api/NguoiDung",
      type: "GET"
    });
  };

  /* Thêm người dùng */
  this.themNguoiDung = function (nguoiDung) {
    return $.ajax({
      url: "http://5d78df44a8c2710014986699.mockapi.io/api/NguoiDung",
      type: "POST",
      data: nguoiDung
    });
  };
}


/* Xoa nguoi dung */
DanhSachNguoiDung.prototype.xoaNguoiDung = function (id) {
  return $.ajax({
    url: `http://5d78df44a8c2710014986699.mockapi.io/api/NguoiDung/${id}`,
    type: "DELETE"
  });
};

/* lấy thông tin người dùng */
DanhSachNguoiDung.prototype.layThongTinNguoiDung = function (id) {
  return $.ajax({
    url: `http://5d78df44a8c2710014986699.mockapi.io/api/NguoiDung/${id}`,
    type: "GET"
  });
};

/* Cap nhat thong tin nguoi dung */
DanhSachNguoiDung.prototype.capNhatNguoiDung = function(id, nguoiDung) {
  return $.ajax({
    url: `http://5d78df44a8c2710014986699.mockapi.io/api/NguoiDung/${id}`,
    type: "PUT",
    data: nguoiDung
  });
};  