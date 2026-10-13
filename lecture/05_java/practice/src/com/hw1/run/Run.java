package com.hw1.run;
import com.hw1.model.dto.Employee;
import com.hw1.model.dto.Person;
import com.hw1.model.dto.Student;

import java.util.Scanner;

public class Run {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        Student[] students  = {
               new Student("홍길동", 20, 178.2, 70.0, 1, "정보시스템 공학과"),
                new Student("김말똥", 21, 187.3, 80.0, 2, "경영학과"),
                new Student("강개순", 23, 167.0, 45.0, 4, "정보통신공학과")
       };
        for(Student student : students) {
            System.out.println(student.information());
        }
        Employee[] employees = new Employee[10];
        int count = 0;
        while(count != employees.length) {
            System.out.print("이름 : ");
            String name = sc.next();
            System.out.print("나이 : ");
            int age = sc.nextInt();
            System.out.print("신장 : ");
            Double height = sc.nextDouble();
            System.out.print("몸무게 : ");
            Double weight = sc.nextDouble();
            System.out.print("급여 : ");
            int salary = sc.nextInt();
            System.out.print("부서 : ");
            String dept = sc.next();

            employees[count] = new Employee(name, age, height, weight, salary, dept);
            count++;

            System.out.println("더 추가 하시겠습니까? (y/n");
            char choice = sc.next().toUpperCase().charAt(0);
            if(choice == 'N') {
                break;
            } else if(choice == 'Y') {
                continue;
            } else {
                while(choice != 'N' && choice != 'Y') {
                    System.out.println("다시 입력해 주세요");
                    System.out.println("더 추가 하시겠습니까? (y/n");
                    choice = sc.next().toUpperCase().charAt(0);
                }
                if(choice == 'N' ) {
                    break;
                }
            }

        }
        for(Employee employee : employees) {
            if(employee != null) {
                System.out.println(employee.information());
            }
        }

    }
}
