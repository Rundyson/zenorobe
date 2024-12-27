<?php

class Banner
{
    public $banner_aid;
    public $banner_is_active;
    public $banner_image;
    public $banner_title;
    public $banner_subtitle;
    public $banner_datetime;
    public $banner_created;

    public $connection;
    public $lastInsertedId;
    public $banner_start;
    public $banner_total;
    public $banner_search;

    public $tblBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblBanner = "clothes_banner";
        
    }
  public function create()
  {
    try {
      $sql = "insert into {$this->tblBanner} ";
      $sql .= "(banner_is_active, ";
      $sql .= "banner_image, ";
      $sql .= "banner_title, ";
      $sql .= "banner_subtitle, ";
      $sql .= "banner_created, ";
      $sql .= "banner_datetime ) values ( ";
      $sql .= ":banner_is_active, ";
      $sql .= ":banner_image, ";
      $sql .= ":banner_title, ";
      $sql .= ":banner_subtitle, ";
      $sql .= ":banner_created, ";
      $sql .= ":banner_datetime ) ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "banner_is_active" => $this->banner_is_active,
        "banner_image" => $this->banner_image,
        "banner_title" => $this->banner_title,
        "banner_subtitle" => $this->banner_subtitle,
        "banner_created" => $this->banner_created,
        "banner_datetime" => $this->banner_datetime,

      ]);
      $this->lastInsertedId = $this->connection->lastInsertId();
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

    public function readAll()
      {
        try {
          $sql = "select * from {$this->tblBanner} ";
          $sql .= "order by banner_is_active desc, ";
          $sql .= "banner_aid asc ";
          $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
          $query = false;
        }
        return $query;
      }

      public function readLimit()
      {
        try {
          $sql = "select * from {$this->tblBanner} ";
          $sql .= "order by banner_is_active desc, ";
          $sql .= "banner_aid asc ";
          $sql .= "limit :start, ";
          $sql .= ":total ";
          $query = $this->connection->prepare($sql);
          $query->execute([
              "start" => $this->banner_start - 1,
              "total" => $this->banner_total,
          ]);
      } catch (PDOException $ex) {
          $query = false;
      }
      return $query;
  }
      public function readById()
      {
          try {
              $sql = "select * from {$this->tblBanner} ";
              $sql .= "where banner_aid = :banner_aid ";
              $query = $this->connection->prepare($sql);
              $query->execute([
                  "banner_aid" => $this->banner_aid,
              ]);
          } catch (PDOException $ex) {
              $query = false;
          }
          return $query;
      }



  public function checkName()
  {
    try {
      $sql = "select banner_title from {$this->tblBanner} ";
      $sql .= "where banner_title = :banner_title ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "banner_title" => "{$this->banner_title}",
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function update()
  {
    try {
      $sql = "update {$this->tblBanner} set ";
      $sql .= "banner_image = :banner_image, ";
      $sql .= "banner_title = :banner_title, ";
      $sql .= "banner_subtitle = :banner_subtitle, ";
      $sql .= "banner_datetime = :banner_datetime ";
      $sql .= "where banner_aid  = :banner_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "banner_image" => $this->banner_image,
        "banner_title" => $this->banner_title,
        "banner_subtitle" => $this->banner_subtitle,
        "banner_datetime" => $this->banner_datetime,
        "banner_aid" => $this->banner_aid
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function delete()
  {
    try {
      $sql = "delete from {$this->tblBanner} ";
      $sql .= "where banner_aid = :banner_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "banner_aid" => $this->banner_aid,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function active()
    {
    try {
    $sql = "update {$this->tblBanner} set ";
    $sql .= "banner_is_active = :banner_is_active, ";
    $sql .= "banner_datetime = :banner_datetime ";
    $sql .= "where banner_aid  = :banner_aid ";
    $query = $this->connection->prepare($sql);
    $query->execute([
    "banner_is_active" => $this->banner_is_active,
    "banner_datetime" => $this->banner_datetime,
    "banner_aid" => $this->banner_aid,
    ]);
    } catch (PDOException $ex) {
    $query = false;
    }
    return $query;
  }
  public function search()
  {
    try {
      $sql = "select * from {$this->tblBanner} ";
      $sql .= "where banner_title like :banner_title ";
      $sql .= "order by banner_is_active desc, ";
      $sql .= "banner_title ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "banner_title" => "%{$this->banner_search}%",
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function filterActive()
  {
    try {
      $sql = "select * from {$this->tblBanner} ";
      $sql .= "where banner_is_active = :banner_is_active ";
      $sql .= "order by banner_is_active desc, ";
      $sql .= "banner_is_active ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "banner_is_active" => $this->banner_is_active,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }
  public function filterActiveSearch()
  {
    try {
      $sql = "select * from {$this->tblBanner} ";
      $sql .= "where banner_is_active = :banner_is_active ";
      $sql .= "and banner_title like :banner_title ";
      $sql .= "order by banner_is_active desc, ";
      $sql .= "banner_title ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "banner_is_active" => $this->banner_is_active,
        "banner_title" => "%{$this->banner_search}%",
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }
  public function checkAssociation()
  {
    try {
      $sql = "select banner_aid from {$this->tblBanner} ";
      $sql .= "where banner_aid = :banner_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "banner_aid" => "{$this->banner_aid}",
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }


}

