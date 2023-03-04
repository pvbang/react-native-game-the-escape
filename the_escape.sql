CREATE DATABASE the_escape;
USE the_escape;

CREATE TABLE Users (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Levels (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(255),
  obstacles INT(2) UNSIGNED,
  items INT(2) UNSIGNED,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Scores (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id INT(6) UNSIGNED NOT NULL,
  level_id INT(6) UNSIGNED NOT NULL,
  score INT(6) UNSIGNED,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES Users(id),
  FOREIGN KEY (level_id) REFERENCES Levels(id)
);

CREATE TABLE Items (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(255),
  effect VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Obstacles (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(255),
  effect VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE User_Items (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id INT(6) UNSIGNED NOT NULL,
  item_id INT(6) UNSIGNED NOT NULL,
  quantity INT(2) UNSIGNED NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES Users(id),
  FOREIGN KEY (item_id) REFERENCES Items(id)
); 

INSERT INTO `the_escape`.`users` (`username`, `password`) VALUES ('pvbang', '123456');

INSERT INTO `the_escape`.`levels` (`name`, `description`) VALUES ('Level 1 - Phòng thí nghiệm', 'Người chơi sẽ bắt đầu game từ phòng thí nghiệm của tòa nhà, nơi nhiều kẻ xấu đang trông ngóng và sẵn sàng tấn công.');
INSERT INTO `the_escape`.`levels` (`name`, `description`) VALUES ('Level 2 - Lối thoát đầu tiên', 'Người chơi phải tìm cách vượt qua một số chướng ngại vật để đến được lối thoát đầu tiên.');
INSERT INTO `the_escape`.`levels` (`name`, `description`) VALUES ('Level 3 - Khu vực kỹ thuật', 'Người chơi sẽ phải trèo lên và xuống các bục máy, giải quyết các câu đố kỹ thuật để tiếp tục đi tiếp.');
INSERT INTO `the_escape`.`levels` (`name`, `description`) VALUES ('Level 4 - Cửa hàng tiện lợi', 'Người chơi sẽ phải tìm cách tiếp cận cửa hàng tiện lợi để lấy vật phẩm hữu ích giúp trốn thoát.');
INSERT INTO `the_escape`.`levels` (`name`, `description`) VALUES ('Level 5 - Nhà bếp', 'Người chơi sẽ phải trèo qua bàn, ghế, lò nướng, chậu rửa để có thể tìm được đường thoát ra ngoài.');
INSERT INTO `the_escape`.`levels` (`name`, `description`) VALUES ('Level 6 - Hành lang ngầm', 'Người chơi sẽ phải đối mặt với nhiều thử thách khác nhau trong hành lang ngầm, bao gồm các bẫy và chướng ngại vật khác.');
INSERT INTO `the_escape`.`levels` (`name`, `description`) VALUES ('Level 7 - Nơi nguy hiểm', 'Người chơi sẽ phải đối mặt với những kẻ xấu đang chờ đợi và sẵn sàng tấn công ở mỗi góc đường.');
INSERT INTO `the_escape`.`levels` (`name`, `description`) VALUES ('Level 8 - Trên mái nhà', 'Người chơi phải trèo lên mái nhà và vượt qua các chướng ngại vật để đến được đích.');
INSERT INTO `the_escape`.`levels` (`name`, `description`) VALUES ('Level 9 - Trên tầng thượng', 'Người chơi phải tìm đường lên tầng thượng để tìm kiếm lối thoát.');
INSERT INTO `the_escape`.`levels` (`name`, `description`) VALUES ('Level 10 - Lối thoát cuối cùng', 'Cuối cùng, người chơi phải vượt qua các chướng ngại vật khó khăn nhất để đến được lối thoát cuối cùng và thoát khỏi tòa nhà.');

INSERT INTO `the_escape`.`obstacles` (`name`, `description`) VALUES ('Tường đá', 'Để tạo cảm giác rào cản vật lý cho người chơi');
INSERT INTO `the_escape`.`obstacles` (`name`, `description`) VALUES ('Cột lửa', 'Để tạo hiệu ứng giật mạnh, cho cảm giác nguy hiểm và hấp dẫn');
INSERT INTO `the_escape`.`obstacles` (`name`, `description`) VALUES ('Bụi mờ', 'Để che giấu quá trình di chuyển của nhân vật, giúp tăng tính khó khăn của game');
INSERT INTO `the_escape`.`obstacles` (`name`, `description`) VALUES ('Đường hầm', 'Để tạo bối cảnh hoang tàn, ẩn chứa những điều bí ẩn');
INSERT INTO `the_escape`.`obstacles` (`name`, `description`) VALUES ('Cửa lớn', ' Để tạo hiệu ứng bất ngờ, đồng thời cũng là mục tiêu hoàn thành của người chơi');

INSERT INTO `the_escape`.`items` (`name`, `description`) VALUES ('Chìa khóa', 'Mở khóa cửa ra khỏi level');
INSERT INTO `the_escape`.`items` (`name`, `description`) VALUES ('Vàng', 'Tăng điểm');
INSERT INTO `the_escape`.`items` (`name`, `description`) VALUES ('Rương', 'Chứa một item ngẫu nhiên');
INSERT INTO `the_escape`.`items` (`name`, `description`) VALUES ('Đồng hồ', 'Tăng thời gian chơi');
INSERT INTO `the_escape`.`items` (`name`, `description`) VALUES ('Mìn', 'Giảm điểm số nếu va chạm');
INSERT INTO `the_escape`.`items` (`name`, `description`) VALUES ('Búa', 'Phá hủy tường để tạo đường đi mới');