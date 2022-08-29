----------------------------------------------------------------
/* -- SQL SELECT --
Nguồn dữ liệu: AdventureWorks2019
- Bảng Production.Product là bảng lưu thông tin của tất cả sản phẩm
*/
USE AdventureWorks2019
Go

-- Lấy thông tin sản phẩm bao gồm các thông tin: id sản phẩm, mã sản phẩm, tên sản phẩm, màu sắc, kích thước, cần nặng, phân loại, kiểu dáng
SELECT ProductID,ProductNumber,Name,Color,Size,Weight,Class,Style 
FROM Production.Product

-- Lấy toàn bộ thông tin sản phẩm
SELECT * FROM Production.Product

-- Lấy thông tin sản phẩm bao gồm các trường thông tin sau: id sản phẩm (ProductID), tên sản phẩm (Name). Trong bảng kết quả, đổi tên cột Name thành ProductName.
SELECT ProductID, Name as ProductName FROM Production.Product

-- Lấy thông tin của 100 sản phẩm đầu tiên (theo thứ tự mặc định)
SELECT TOP(100) * FROM Production.Product

-- Lấy thông tin sản phẩm bao gồm các thông tin: id sản phẩm, mã sản phẩm, tên sản phẩm, màu sắc, kích thước, cần nặng, phân loại, kiểu dáng
SELECT ProductID,ProductNumber,Name,Color,Size,Weight,Class,Style 
FROM Production.Product

SELECT ProductID,ProductNumber,Name,Color,Size,Weight,Class,Style 
FROM Production.Product
WHERE Name like '%Sport%'

SELECT ProductID,ProductNumber,Name,Color,Size,Weight,Class,Style 
FROM Production.Product
WHERE Color is not null and Size is not null

-- Sản phẩm do công ty sản xuất/bán ra có các loại màu sắc nào? 
SELECT DISTINCT Color FROM Production.Product
SELECT DISTINCT Color FROM Production.Product WHERE Color is not null

-- Sản phẩm do công ty sản xuất/bán ra có các loại kích thước(size) nào?
SELECT DISTINCT Size From Production.Product
SELECT DISTINCT Size From Production.Product WHERE Size is not null

-- Sản phẩm do công ty sản xuất/bán ra có các kiểu dáng nào?
SELECT DISTINCT Style From Production.Product
SELECT DISTINCT Style From Production.Product WHERE Style is not null

-- Danh sách sản phẩm có màu trắng, màu đen hoặc màu đỏ
SELECT ProductID,ProductNumber,Name,Color,Size,Weight,Class,Style 
FROM Production.Product
WHERE Color='WHITE' or Color='BLACK' or Color='RED'

SELECT ProductID,ProductNumber,Name,Color,Size,Weight,Class,Style 
FROM Production.Product
WHERE Color in('WHITE','BLACK','RED')

-- Danh sách sản phẩm có size S,M,L hoặc XL
SELECT ProductID,ProductNumber,Name,Color,Size,Weight,Class,Style 
FROM Production.Product
WHERE Size in('S','M','L','XL')

-- Danh sách sản phẩm có màu trắng và có size S,M,L hoặc XL
SELECT ProductID,ProductNumber,Name,Color,Size,Weight,Class,Style 
FROM Production.Product
WHERE Color='WHITE' and Size in('S','M','L','XL')

-- Danh sách sản phẩm có màu trắng hoặc màu đen và có size S,M,L hoặc XL
SELECT ProductID,ProductNumber,Name,Color,Size,Weight,Class,Style 
FROM Production.Product
WHERE Color in('WHITE','BLACK') and Size in('S','M','L','XL')


/* Vấn đề 1: Lấy thông tin khách hàng
Input: 
- Bảng Production.Product là bảng lưu thông tin của tất cả sản phẩm
*/

