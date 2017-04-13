const inputs = document.querySelectorAll(".controls input"); /* queryselector will give you a node list, not an array*/

function handleUpdate() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
