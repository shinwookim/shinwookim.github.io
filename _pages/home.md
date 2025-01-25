---
title: Home
layout: page
permalink: /
---

{:.alert .alert-warning role="alert"}
_I am currently completing my [compulsory military service](https://en.wikipedia.org/wiki/Conscription_in_South_Korea) with a scheduled discharge date of September 2025. During this time, I am not able to readily respond to communications via email, social media, etc._

I am a software developer and computer scientist with a strong interest in **building reliable (distributed) systems**—although there are very few things in computer science that I'm _not_ interested in. I was previously affiliated with the [School of Computing and Information](https://sci.pitt.edu) at the [University of Pittsburgh](https://pitt.edu), where I earned both a Bachelor’s and a Master’s degree in computer science.

During my time at Pitt, I engaged in innovative research and non-research [projects]({% link _pages/projects.md %}), [taught]({% link _pages/archive/teaching.md %}) exceptional students, and advocated for equity and inclusion in STEM education.

## Experience

{%- for experience in site.data.experience %}

<div class="row">
  <div class="col fw-bold">
    {% if experience.start_year == experience.end_year%}
    {{experience.start_year}}.
    {% else %}
    {{experience.start_year }} – {{experience.end_year }}.
    {% endif %}
  </div>
  <div class="col-12 col-sm-9" markdown="1">{: .mb-0}
{{experience.title}}, {{experience.company}}
  </div>
</div>
{% endfor %}

{: .mt-3}

## Education

{: .fa-ul}

- <span class="fa-li fas fa-graduation-cap"></span> M.S., Computer Science, 2024
  {: }
  University of Pittsburgh
  {: .small}

- <span class="fa-li fas fa-graduation-cap"></span> M.S., Computer Science, 2024
  {: }
  University of Pittsburgh
  {: .small}
