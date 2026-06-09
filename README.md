# Tiến Anh & Ngọc Huyền - Wedding Invitation Website (v19)

## Nội dung đã chuyển từ HTML bạn gửi
Nguồn: `source_html/Wedding Invitation - Tiến Anh & Ngọc Huyền.html`

Đã cập nhật nội dung chính theo file HTML:
- Cặp đôi: Tiến Anh & Ngọc Huyền
- Ngày cưới: Thứ Bảy, 07/12/2025
- Lễ chính: 17h30 tại Trung Tâm Hội Nghị Quốc Gia, Mễ Trì, Nam Từ Liêm, Hà Nội
- Lễ nhà gái: 16h30 tại Tư Gia Nhà Gái, Quốc Oai, Hà Nội
- About cô dâu / chú rể
- Timeline tiệc cưới
- Story tình yêu
- Hộp mừng cưới
- RSVP / lời chúc

## Image / ảnh
Mình đã trích xuất toàn bộ link ảnh từ HTML vào:
- `aurora_assets/aurora_image_links.csv`
- `aurora_assets/aurora_image_links.json`
- `aurora_assets/aurora_remote_images_1_to_10.json`

Website sẽ ưu tiên ảnh local trong thư mục `image/`:
- `image/1.jpg`
- `image/2.jpg`
- ...
- `image/10.jpg`

Nếu thiếu ảnh local, website sẽ fallback sang CDN link được trích từ HTML Aurora.

## Lưu ý download ảnh
Trong môi trường build hiện tại không resolve được DNS ra `w.ladicdn.com/static.ladipage.net`, nên binary ảnh chưa tải trực tiếp được vào thư mục `aurora_assets/images/`.
Mình đã để sẵn script:
- `aurora_assets/download_images.py`

Khi chạy ở máy có internet, script này sẽ tải toàn bộ link ảnh vào `aurora_assets/images/`.

## Hiệu ứng / giao diện
- Mở rèm cổ trang
- Cánh sen + bong bóng rơi
- Hoa đăng bay, glow, bướm, parallax
- Cuộn giấy story tình yêu
- Cuốn chiếu ảnh / thủ quyển ảnh 1–10
- Gallery popup lightbox
- RSVP + guestbook localStorage
- i18n 4 ngôn ngữ

## Cách dùng
1. Giải nén ZIP.
2. Mở `index.html` để xem.
3. Nếu muốn ảnh chạy local hoàn toàn, bỏ ảnh vào thư mục `image/` theo tên 1–10.
4. Nếu muốn tải toàn bộ ảnh Aurora bằng script, chạy:
   ```bash
   python aurora_assets/download_images.py
   ```
5. Nhạc cưới đặt tại: `assets/music/wedding-song.mp3`
