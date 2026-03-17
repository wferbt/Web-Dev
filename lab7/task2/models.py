class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def apply_discount(self, percent):
        self.price -= self.price * (percent / 100)
        return f"New price for {self.name}: {self.price}"

    def get_stock_info(self):
        return f"{self.name}: {self.quantity} items in stock."

    def __str__(self):
        return f"Product: {self.name}, Price: {self.price}"

class Electronics(Product):
    def __init__(self, name, price, quantity, warranty_period):
        super().__init__(name, price, quantity)
        self.warranty_period = warranty_period

    def get_warranty_info(self):
        return f"Warranty for {self.name} is {self.warranty_period} months."

    # Переопределение (Method Overriding)
    def __str__(self):
        return f"Electronics: {self.name}, Price: {self.price}, Warranty: {self.warranty_period}m"

class Food(Product):
    def __init__(self, name, price, quantity, expiration_date):
        super().__init__(name, price, quantity)
        self.expiration_date = expiration_date

    def is_expired(self):
        return f"Checking expiration date for {self.name}: {self.expiration_date}"

    # Переопределение (Method Overriding)
    def apply_discount(self, percent):
        # Для еды скидка всегда больше на 5%, если акция
        total_discount = percent + 5
        self.price -= self.price * (total_discount / 100)
        return f"Food Promo! New price for {self.name}: {self.price} (includes extra 5% off)"
