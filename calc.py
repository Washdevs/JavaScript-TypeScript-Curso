import tkinter as tk

class Calculator:
    def __init__(self, root):
        self.root = root
        self.root.title("Calculadora Moderna")
        self.root.resizable(False, False)
        self.expression = ""

        # Cores
        bg_color = "#2E2E2E"
        button_color = "#4E4E4E"
        text_color = "#FFFFFF"
        display_color = "#1C1C1C"
        highlight_color = "#FF9500"
        button_click_color = "#3A3A3A"  # Cor para o botão ao ser clicado

        # Configurações da janela
        self.root.configure(bg=bg_color)

        # Widget de entrada para o display
        self.display = tk.Entry(root, width=16, font=("Arial", 24), bd=0, relief=tk.FLAT, justify="right", bg=display_color, fg=text_color)
        self.display.grid(row=0, column=0, columnspan=4, padx=10, pady=20)

        # Definir os botões em uma lista
        buttons = [
            '7', '8', '9', '/',
            '4', '5', '6', '*',
            '1', '2', '3', '-',
            'C', '0', '=', '+'
        ]

        # Criar e posicionar os botões usando um layout de grade
        row = 1
        col = 0
        for button in buttons:
            action = lambda x=button: self.click(x)
            if button in ['=', 'C']:
                btn_color = highlight_color
            else:
                btn_color = button_color
            btn = tk.Button(root, text=button, width=4, height=2, font=("Arial", 20), bg=btn_color, fg=text_color, bd=0, relief=tk.FLAT, command=action)
            btn.grid(row=row, column=col, padx=5, pady=5)
            btn.bind("<ButtonPress-1>", lambda event, b=btn: b.config(bg=button_click_color))
            btn.bind("<ButtonRelease-1>", lambda event, b=btn, c=btn_color: b.config(bg=c))
            col += 1
            if col > 3:
                col = 0
                row += 1

    def click(self, key):
        if key == 'C':
            # Limpar o display
            self.expression = ""
            self.display.delete(0, tk.END)
        elif key == '=':
            # Avaliar a expressão e atualizar o display
            try:
                result = str(eval(self.expression))
                self.display.delete(0, tk.END)
                self.display.insert(tk.END, result)
                self.expression = result  # Permitir encadeamento de operações
            except Exception:
                self.display.delete(0, tk.END)
                self.display.insert(tk.END, "Erro")
                self.expression = ""
        else:
            # Adicionar a tecla à expressão e atualizar o display
            self.expression += key
            self.display.delete(0, tk.END)
            self.display.insert(tk.END, self.expression)

if __name__ == "__main__":
    root = tk.Tk()
    calc = Calculator(root)
    root.mainloop()
