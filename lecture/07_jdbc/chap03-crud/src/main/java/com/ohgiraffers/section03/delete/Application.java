package com.ohgiraffers.section03.delete;

import com.ohgiraffers.model.dto.MenuDTO;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Properties;
import java.util.Scanner;

import static com.ohgiraffers.common.JDBCTemplate.close;
import static com.ohgiraffers.common.JDBCTemplate.getConnection;

public class Application {
    public static void main(String[] args) {

        /* 메뉴 코드를 입력받아 해당 메뉴 삭제하기 */

        Scanner sc = new Scanner(System.in);
        System.out.print("삭제할 메뉴 번호를 입력하세요 : ");
        int menuCode = sc.nextInt();


        MenuDTO deleteMenu = new MenuDTO();
        deleteMenu.setCode(menuCode);

        Connection con = getConnection();
        PreparedStatement pstmt = null;
        Properties prop = new Properties();

        int result = 0;

        try(FileInputStream queryStream = new FileInputStream("src/main/java/com/ohgiraffers/mapper/menu-query.xml")) {
            prop.loadFromXML(queryStream);
            String query = prop.getProperty("deleteMenu"); // xml파일의 key값과 일치해야된다

            pstmt = con.prepareStatement(query);

            pstmt.setInt(1, deleteMenu.getCode());

            result = pstmt.executeUpdate(); // dml 작업을 하면 dml 작업이 일어난 행(row)의 갯수를 반환(int)

            pstmt = con.prepareStatement(query);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            close(pstmt);
            close(con);
        }
        if(result > 0) {
            System.out.println("메뉴 삭제 성공!");
        } else {
            System.out.println("메뉴 삭제 실패");
        }
    }
}
