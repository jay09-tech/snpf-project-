// Initial Mock Data
const INITIAL_POSTS = [
    {
        id: 1,
        title: "The Nimikoro Chiefdom Gathering 2024",
        excerpt: "Members from across the Kono District and the diaspora returned home to celebrate our Sierra Leonean roots.",
        category: "Events",
        image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Educational Excellence in Freetown",
        excerpt: "Honoring our youth who excelled in the NPSE and WASSCE exams this year.",
        category: "Family Progress",
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"
    }
];

// Function to render blog posts
function renderPosts() {
    const grid = document.getElementById('post-grid');
    grid.innerHTML = INITIAL_POSTS.map(post => `
        <div class="bg-white rounded-3xl border border-[#E5E0D8] shadow-sm overflow-hidden p-8 hover:-translate-y-2 transition-transform cursor-pointer">
            <div class="h-40 rounded-2xl overflow-hidden mb-6">
                <img src="${post.image}" class="w-full h-full object-cover"/>
            </div>
            <span class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">${post.category}</span>
            <h3 class="text-xl font-black text-[#1B5E20] mt-4 mb-2">${post.title}</h3>
            <p class="text-sm text-[#5D4037] line-clamp-2">${post.excerpt}</p>
        </div>
    `).join('');
}

// Initialize Lucide Icons and Render Content
document.addEventListener('DOMContentLoaded', () => {
    renderPosts();
    lucide.createIcons();
});