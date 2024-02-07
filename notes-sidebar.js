// SIDEBAR POPOUT

document.addEventListener('DOMContentLoaded', function () {
    // Array of topics - you can dynamically generate this from your existing content
    var topics = [
      "History and Milestones in Public Health and Community Health Specialties",
      "Principles of Epidemiology",
      "Epidemiological Methods",
      "Screening for Diseases",
      "Levels of Prevention",
      "Primary Health Care",
      "Principles and Methods of Health Education",
      "Essential Drugs",
      "Community Oral Health",
      "Childhood Immunization",
      "Healthcare in Danger",
      "Research Methodology",
      "Healthcare Associated Infections",
      "Disaster Management",
      "Management of Epidemics",
      "Disease Surveillance and Epidemics",
      "International Health",
      "Health Management Information System",
      "Global Health",
      "Nutrition in Public Health",
      "Health Management and Planning",
      "Health Policy",
      "Public Health Laws",
      "Epidemiology of Communicable Diseases",
      "Vector Control",
      "Tuberculosis",
      "Leprosy",
      "Schistosomiasis",
      "Lymphatic Filariasis",
      "Onchocerciasis",
      "Human African Trypanosomiasis",
      "American Trypanosomiasis",
      "Leishmaniasis",
      "Dengue Fever",
      "Malaria",
      "Introduction to Environmental Health",
      "Refuse and Sewage Disposal",
      "Water Supply/Treatment and Diseases Associated With Water",
      "Food Hygiene/Food Safety",
      "Housing",
      "Emerging and Re-emerging Diseases",
      "Coronavirus",
      "Ebola Virus Disease",
      "Diphtheria",
      "Lassa Fever and other Viral Hemorrhagic Fevers",
      // Add more topics as needed
    ];

    // Function to create sidebar menu items
    function createSidebarMenu() {
      var sidebarMenu = document.querySelector('.toggle-menu');
      topics.forEach(function (topic) {
        var listItem = document.createElement('li');
        var link = document.createElement('a');
        var topicSlug = topic.toLowerCase().replace(/\s+/g, '-');
        link.href = '../lectures/' + topicSlug + '.html'; // Adjust the href based on your file structure
        link.textContent = topic;

        // Highlight the current page
        if (isCurrentPage(topicSlug)) {
          listItem.classList.add('current-page');
        }

        listItem.appendChild(link);
        sidebarMenu.appendChild(listItem);
      });
    }

    // Function to toggle the sidebar
    function toggleSidebar() {
      var sidebar = document.getElementById('sidebar');
      sidebar.style.width = '250px';
    }

    // Function to close the sidebar
    function closeSidebar() {
      var sidebar = document.getElementById('sidebar');
      sidebar.style.width = '0';
    }

    // Function to check if the current page matches the provided topic slug
    function isCurrentPage(topicSlug) {
      var currentPage = window.location.pathname.split('/').pop().replace('.html', '');
      return currentPage === topicSlug;
    }

    // Attach event listener to the toggle button
    document.getElementById('toggleSidebarBtn').addEventListener('click', toggleSidebar);

    // Attach event listener to the close button
    document.getElementById('closeSidebarBtn').addEventListener('click', closeSidebar);

    // Function to close the sidebar when clicking outside of it
    function closeSidebarOnClickOutside(event) {
      var sidebar = document.getElementById('sidebar');
      var sidebarBtn = document.getElementById('toggleSidebarBtn');

      // Check if the clicked element is not part of the sidebar or the toggle button
      if (!sidebar.contains(event.target) && event.target !== sidebarBtn) {
        closeSidebar();
      }
    }

    // Attach event listener to the document for clicks
    document.addEventListener('click', closeSidebarOnClickOutside);

    // Create the sidebar menu on page load
    createSidebarMenu();
  });

