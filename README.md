# Prodecures and Protocols Repo
Source for the new PnP content

# About The Project

This website is build with Hugo, and is using YAML data files, and markdown as the data storage.

## Built With

* [Hugo](https://gohugo.io/)
* [NetlifyCMS](https://www.netlifycms.org/)

# Site Layout

Code in `src` overrides same file names in `themes/portio`

## Configuration Files

* src/config/\_default/config.toml

## Data files

All the contained data of this website is stored in YAML files.

### Horizontal sub navigation bar

For editing the data of this component, refer to this YAML file: `src/data/contents.yml`

### List of plants, systems, and components

For the listed plants, systems, and components when navigating the horizontal sub navigation, refer to these files:

```
- src/data/plants.yml
- src/data/systems.yml
- src/data/components.yml
```

### Actual individual guide pages

For modifying the individual guide pages, refer to this files:

```
- src/content/documents/plants
- src/content/documents/components
- src/content/documents/systems
```

### Creating new guide page


Follow these step-by-step guide on how to create a new guide page:

1. Create a new guide page in `src/content/documents/components` for components guide, `src/content/documents/plants` for plants guide, and `src/content/documents/systems` for systems guide.
2. Follow this format for creating the guide page content:
   ```
   ---
   title: Sample system 1
   type: system
   author: John Doe
   layout: single
   url: "/documents/systems/sample-system-1"
   ---

   <Content here in markdown format>
   ```
3. The content of the guide page is in markdown format, but HTML tags can also be used, the website supports rendering HTML tags in the markdown files.
4. After the content of the page is done, time to list the guide page to the horizontal sub navigation bar, follow the steps below.
5. Go to `src/data/plants.yml` if you want to add a plant page, `src/data/systems.yml` for systems page, and `src/data/components.yml` for components page.
6. Create a new entry under the `documents` key of the YAML file.
7. It is important to follow the current indentation of the YAML file, and all fields(`document_id`, `document_type`, `document_author`, `document_title`, and `url`) are required.
   1. *NOTE*: for the `url` key, copy the relevant path of the `.md` file that you created earlier.
8. Verify if the added entry is displayed in the list of guides in the horizontal sub nagivation bar.

For detailed guide, check this [Slite doc](https://zatonovo.slite.com/app/docs/Ns_i96FlIAaoGo/Hugo-How-to-create-new-pages).
NOTE: This Slite doc covers the creation of new measurement technique, and Calculation methodology pages.

## Navigation Bar and Footer

- Navigation Bar - src/layouts/partials/navbar.html
* Footer - src/layouts/partials/footer.html

## Home page

* src/content/\_index.md
* src/layouts/index.html

## Other pages

* images - src/static/images
* stylesheets (SCSS) - src/assets/scss

# Getting Started

To get a local copy up and running follow these simple example steps.

## Prerequisites

* Docker (if you plan on just building and running Hugo through docker)
    * You can refer to this site on [how to install docker on Linux](https://docs.docker.com/engine/install/ubuntu/)

## Setup

```sh
git clone git@github.com:cunybpl/nycet_pnp.git
```

## Run

```sh
make build run
```

If you have issues with permissions, add `sudo` prior to the command(_for Linux OS_).

Access the site at http://localhost:1313/


## References

- [Slite documentation for setting up and managing the guide pages](https://zatonovo.slite.com/app/docs/i-b2RUm-5lJf1F/How-to-setup-the-repository-local)