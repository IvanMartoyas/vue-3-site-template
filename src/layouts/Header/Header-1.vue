<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="logo"><img src="../../assets/logo.png" alt="logo"></div>
                <nav class="menu">
                    <ul>
                        <li><router-link to="/">Home</router-link></li>   
                        <li><router-link to="/blog">Blog</router-link></li>   
                        <li><router-link to="/about">About</router-link></li>   
                    </ul>
                </nav>
                <p>
                    <strong>header 1Current route path:</strong> {{ $route.fullPath }}
                </p>
            </div>
        </div>
        
        
    </header>
</template>