<?php

class M_dasboard extends CI_Model
{
    public function __construct()
    {
        $this->date = new DateTime();
    }

    function get_pelayanan()
    {
        $this->db->select("*");
        $this->db->from()
    }

    function get_sum($tabel, $select, $like, $where='')
    {
        $this->db->select($select, FALSE);
        $this->db->select('pgw.username,CAST(p.create_at AS DATE) as create_at,c.nama,c.id as cabang_id', FALSE);
        $this->db->from($tabel);
        $this->db->like($like);
        if ($where!='') {
            $this->db->where($where);
        }
        $this->db->join('responsible as r', 'r.id = p.responsible_id');
        $this->db->join('pegawai as pgw', 'pgw.id = r.pegawai_id');
        $this->db->join('cabang as c', 'c.id = p.cabang_id');
        $this->db->group_by("responsible_id");
        $query =  $this->db->get();
        $res = $query->row();
        if ($res != NULL) {
            return $res;
        }
    }
    
}
