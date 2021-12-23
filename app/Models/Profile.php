<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Profile extends Model
{
    use HasFactory;

    /**
     * Profile's types
     * 
     * @var array 
     */
    public const TYPES = [
        1 => 'admin',
        2 => 'patient',
        3 => 'doctor'
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'f_last_name',
        'm_last_name',
        'birthday',
        'phone',
        'mobile_phone'
    ];

    /**
     * Get the user that owns the Profile
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'id', 'user_id');
    }

    /**
     * returns the id of a given type
     *
     * @param string $type  user's type
     * @return int TypeID
     */
    public static function getTypeID($type)
    {
        return array_search($type, self::TYPES);
    }
    /**
     * get Profile type
     */
    public function getTypeAttribute()
    {
        return self::TYPES[ $this->attributes['type_id'] ];
    }
    /**
     * set Profile type
     */
    public function setTypeAttribute($value)
    {
        $typeID = self::getTypeID($value);
        if ($typeID) {
            $this->attributes['type_id'] = $typeID;
        }
    }
}
