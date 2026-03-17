from models import Product, Electronics, Food

def main():
    # Создаем список объектов (Полиморфизм)
    catalog = [
        Electronics("Laptop", 1200.0, 5, 24),
        Food("Apple", 2.0, 100, "2026-05-20"),
        Product("Notebook", 5.0, 50)
    ]

    print("--- Product Catalog ---")
    for item in catalog:
        # Демонстрация __str__
        print(item)
        
        # Демонстрация полиморфизма (вызов переопределенного метода apply_discount)
        print(item.apply_discount(10))
        
        # Проверка специфичных методов
        if isinstance(item, Electronics):
            print(item.get_warranty_info())
        elif isinstance(item, Food):
            print(item.is_expired())
        
        print("-" * 30)

if __name__ == "__main__":
    main()
