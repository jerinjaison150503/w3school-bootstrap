<script>
        const toggleButton = document.getElementById('theme-toggle');
        
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            // Save the current mode to local storage
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    
        // Load the preferred theme from local storage on page load
        window.addEventListener('load', () => {
            if (localStorage.getItem('theme') === 'dark') {
                document.body.classList.add('dark-mode');
            }
        });
    </script>