CREATE TABLE tblattendance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    empid INT,
    attendance_date DATE,
    status ENUM('Present', 'Absent'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (empid) REFERENCES tblemployees(id)
);
