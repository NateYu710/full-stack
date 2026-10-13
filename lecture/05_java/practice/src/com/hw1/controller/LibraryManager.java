package com.hw1.controller;
import com.hw1.model.dto.Member;
import com.hw1.model.dto.Book;

public class LibraryManager {
    private Member mem = null;
    private Book[] bList = new Book[5];

    public void insertMember(Member mem) {

    }

    public Member myInfo() {
        return mem;
    }

    public Book[] selectAll() {
        return bList;
    }

    public Book[] searchBook(String keyword) {
        return bList;
    }

    public int renBook(int index) {
        return index;
    }

    public Member getMem() {
        return mem;
    }

    public void setMem(Member mem) {
        this.mem = mem;
    }

    public Book[] getbList() {
        return bList;
    }

    public void setbList(Book[] bList) {
        this.bList = bList;
    }
}
