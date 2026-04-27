---
layout: minimal
title: the studio
permalink: /blog/
description: my reflections and learnings
nav: false
---

<a href="/" class="studio-back">↑ kia ghods</a>

<header class="studio-header">
<div class="studio-name">the studio</div>
<p class="studio-subtitle">my reflections and learnings</p>
</header>

<ul class="post-list">
{% for post in site.posts %}
{% assign external = false %}
{% if post.redirect contains '://' %}
{% assign post_url = post.redirect %}
{% assign external = true %}
{% else %}
{% assign post_url = post.url %}
{% endif %}
<li>
<a class="post-link" href="{{ post_url }}"{% if external %} target="_blank" rel="noopener"{% endif %}>
<div class="post-title">{{ post.title }}</div>
{% if post.description %}<p class="post-desc">{{ post.description }}</p>{% endif %}
<p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}{% if external %} &nbsp;·&nbsp; published elsewhere{% endif %}</p>
</a>
</li>
{% endfor %}
</ul>
