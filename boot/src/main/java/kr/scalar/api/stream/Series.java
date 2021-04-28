package kr.scalar.api.stream;

import java.util.ArrayList;
import java.util.Comparator;

public class Series<T> {
    private ArrayList<T> list;
    public Series() { this.list = new ArrayList<T>();}
    public void add(T t){list.add(t);}
    public T get(int i){return list.get(i);}
    public void clear(){list.clear();}
    public int size(){return list.size();}
    public boolean contains(T t){return list.contains(t);}
    public void sort(Comparator c){list.sort(c);}
}
