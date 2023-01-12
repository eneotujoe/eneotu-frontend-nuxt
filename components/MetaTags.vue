<script setup>
defineProps({
    title: {
        type: String,
        required: true,
        default: 'Home'
    },
    description:{
        type: String,
        default: 'Artificial intelligence and software engineering blog'
    },
    image: {
        type: String,
        default: 'https://res.cloudinary.com/reinforcedai/image/upload/v1673520614/eneotu.com/eneotu_share_image_77c7c37e2a.png'
    },
    author:{
        type: String,
        default: ''
    },
})
</script>

<template>
   <Head>
        <Title>{{ title }} | Eneotu</Title>
        <Meta name="description" :content=description />
        <Meta name='keywords' content='Artificial intelligence AI machine learning reinforcement learning data science' />
        <Meta name='author' :content=author />
        <Meta hid='image' name="image" :content=image />
        <Meta name="twitter=card" content="summary_large_image" />
        <Meta hid='twitter=title' name="twitter=title" content='Eneotu' />
        <Meta hid='twitter=description' name="twitter=description" :content=description />
        <Meta hid='twitter=image' name="twitter=image" :content=image />
        <Meta hid='twitter=image=alt' name='twitter=image=alt' content='eneotu.com share smage' />
        <Meta hid='twitter=site' name='twitter=site' content='Eneotu' />
        <Meta hid='twitter=url' name='twitter=url' content='https://eneotu.com' />
        <Meta hid='og=title' property="og=title" content='Eneotu' />
        <Meta hid='og=description' property="og=description" :content=description />
        <Meta hid='og=site_name' property='og=site_name' content='Eneotu' />
        <Meta hid='og=image' property="og=image" :content=image />
        <Meta hid='og=image=secure_url' property='og=image=secure_url' :content=image />
        <Meta hid='og=image=alt' property='og=image=alt' content='eneotu.com share smage' />
        <Meta hid='og=type' property='og=type' content='Website' />
        <Meta hid='og=url' property='og=url' content='https://eneotu.com' />
        <Link rel="canonical" href='https://eneotu.com' />

      
        <Script async defer data-website-id='2c38409d-821c-4cf3-a5e8-9ee3921f4da2' src='https://analytics-admin.netlify.app/umami.js' />
    
    </Head>
</template>
